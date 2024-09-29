# from .serializers import EncodeSerializers
from .Process import encode, decode
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import FileResponse
from PIL import Image
import io

class Encode(APIView):
    def post(self, request, *args, **kwargs):
        # serializers = EncodeSerializers(data=request.data, context={'request': request})
        # if serializers.is_valid():
        #     serializers.save()
        #     return Response(serializers.data, status=status.HTTP_201_CREATED)
        # return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
        
        image_file = request.FILES.get('image')
        text = request.data.get('text')

        # Check if the image and text is supplied or not
        if not image_file or not text:
            return Response({"error": "Image and text are required."}, status=400)
        
        image = Image.open(image_file)
        
         # Check if the image is in a lossless format
        if image.format.lower() not in ['png', 'bmp', 'tiff']:
            return Response({"error": "Please use a lossless image format like PNG or BMP."}, status=400)
        
        # encode 
        encoded_image = encode(image, text)

        image_io = io.BytesIO()
        encoded_image.save(image_io, format=image.format)
        image_io.seek(0)

        response = FileResponse(image_io, content_type=f'image/{image.format.lower()}')
        response['Content-Disposition'] = f'attachment; filename="processed_image.{image.format.lower()}"'
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
        