from PIL import Image
import numpy as np 
import matplotlib.pyplot as plt 

# Code to encode the message
# message = input()
def encode(img, message):
    img = np.array(img)
    plt.imshow(img)
    H,W, D= img.shape
    
    message += '[END]'
    message = message.encode("ascii")
    message_bits = ''.join([format(i, '08b') for i in message])

    img = img.flatten()
    for idx, bit in enumerate(message_bits):
        val = img[idx]
        val = bin(val)
        val = val[:-1]+bit
        img[idx] = int(val,2)
    img = img.reshape(H,W,D)
    img = Image.fromarray(img.astype('uint8'), 'RGB')
    
    return img

# Code to decode the message
def decode(img):
    msg = ""
    idx = 0
    img = np.array(Image.open("./B1EXkZ2Em.jpeg"))
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

    return msg