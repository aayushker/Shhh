import io
from PIL import Image
import numpy as np 
import matplotlib.pyplot as plt 
from .Encrption import AES, Base64, CaesarCipher, Fernet, RSA, VigenereCipher


def Encryption(mssg, type):
    if type == 'Base64':
        mssg = Base64.encrypt_Base64(mssg)
        return mssg
    elif type == 'CaesarCipher':
        mssg = CaesarCipher.encrypt_CaesarCipher(mssg)
        return mssg
    elif type == 'Fernet':
        mssg = Fernet.encrypt_Fernet(mssg)
        return mssg
    
def Decrption(mssg, type):
    if type == 'Base64':
        mssg = Base64.decrypt_Base64(mssg)
        return mssg
    elif type == 'CaesarCipher':
        mssg = CaesarCipher.decrypt_CaesarCipher(mssg)
        return mssg
    elif type == 'Fernet':
        mssg = Fernet.decrypt_Fernet(mssg)
        return mssg


# Code to encode the message
# message = input()
def encode(img, message):
    img = np.array(img)
    
    # If the image has an alpha channel, ensure to process only RGB
    if img.shape[2] == 4:
        img = img[:, :, :3]

    H, W, D = img.shape

    message += '[END]'
    message = message.encode("ascii")
    message_bits = ''.join([format(i, '08b') for i in message])

    # Flatten the image array
    img = img.flatten()

    # Ensure the message can fit within the image's pixel data
    if len(message_bits) > len(img):
        raise ValueError("Message is too large to encode in the provided image.")

    for idx, bit in enumerate(message_bits):
        val = img[idx]
        # Modify only the least significant bit
        val = (val & 0xFE) | int(bit)
        img[idx] = val

    img = img.reshape(H,W,D)
    img = Image.fromarray(img.astype('uint8'), 'RGB')
    
    return img

# Code to decode the message
def decode(img):
    msg = ""
    idx = 0
    img = np.array(img)
    img = img.flatten()
    while msg[-5:] != '[END]':
        bits = [bin(i)[-1] for i in img[idx:idx+8]]
        bits = "".join(bits)
        msg += chr(int(bits,2))
        idx += 8
        if idx > img.shape[0]-8:
            print("There is no hidden message")
            break
    msg = msg[:-5]
    print(msg)
    return msg

# Convert lossy image format to PNG
def Convert(img):
    try:
        img_io = io.BytesIO()
        img.save(img_io, format='PNG')
        img_io.seek(0)
        return Image.open(img_io)
    except Exception as e:
        return f"Error converting the image: {e}"