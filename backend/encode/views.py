# from .serializers import EncodeSerializers
from .Process import encode, decode, Convert
from .testProcess import testEncryption, testDecrpytion
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.response import Response
from django.http import FileResponse
from PIL import Image
import io

# Heartbeat request
def Heartbeat(request):
    return JsonResponse({'status': 'Backend is active'})

class Encode(APIView):
    def post(self, request, *args, **kwargs):
        # serializers = EncodeSerializers(data=request.data, context={'request': request})
        # if serializers.is_valid():
        #     serializers.save()
        #     return Response(serializers.data, status=status.HTTP_201_CREATED)
        # return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
        
        image_file = request.FILES.get('image')
        text = request.data.get('text')

        # Check if the image and text are supplied
        if not image_file or not text:
            return Response({"error": "Image and text are required."}, status=400)
        
        image = Image.open(image_file)
        
        # Check if the image is in a lossless format
        if image.format.lower() not in ['png', 'bmp', 'tiff']:
            # Convert lossy image format to PNG
            image = Convert(image)
            if isinstance(image, str):  # Check if Convert function returned an error message
                return Response({"error": image}, status=400)
        
        # Encode the image with the message
        encoded_image = encode(image, text)

        # Save the encoded image as PNG
        image_io = io.BytesIO()
        encoded_image.save(image_io, format='PNG')  # Always save as PNG
        image_io.seek(0)

        # Return the processed image as a downloadable file
        response = FileResponse(image_io, content_encryptionType='image/png')
        response['Content-Disposition'] = 'attachment; filename="processed_image.png"'
        return response

class Decode(APIView):
    def post(self, request, *args, **kwargs):
        
        image_file = request.FILES.get('image')
        
        if not image_file:
            return Response({"error": "Image is required."}, status=400)
        
        image = Image.open(image_file)
        
        # decode
        message = decode(image)
        
        response = message
        return Response(response)

# View to check the working of Encryption algorithms      
class testEncode(APIView):
    def post(self, request, *args, **kwargs):
        unencryptedText = request.data.get('unencryptedText')
        encryptionType = request.data.get('encryptionType')
        secretKey = request.data.get('secretKey')
        
        if not unencryptedText or not encryptionType:
            return Response({"error": "Text or Encryption Type not present"}, status=400)
        
        if encryptionType in ['AES'] and secretKey == "none":
            return Response({"error": "Password not provided"}, status=400)
        encryptedText = testEncryption(unencryptedText, encryptionType, secretKey)
        
        response = encryptedText
        return Response(response)

# View to check the working of Encryption algorithms      
class testDecode(APIView):
    def post(self, request, *args, **kwargs):
        encryptedText = request.data.get('encryptedText')
        encryptionType = request.data.get('encryptionType')
        secretKey = request.data.get('secretKey')
        
        if not encryptedText or not encryptionType:
            return Response({"error": "Text or Encryption Type not present"}, status=400)
        
        if encryptionType in ['AES'] and secretKey == "none":
            return Response({"error": "Password not provided"}, status=400)
        
        decryptedText = testDecrpytion(encryptedText, encryptionType, secretKey)
        
        response = decryptedText
        return Response(response)
    

# sample post json for testEncode
# {
#   "unencryptedText":"khikhikhukhu",
#   "encryptionType":"Base64",
#   "secretKey":"none"
# }

# sample post json for testDecode
# {
#   "encryptedText":"a2hpa2hpa2h1a2h1",
#   "encryptionType":"Base64",
#   "secretKey":"none"
# }