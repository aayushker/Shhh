from PIL import Image
import numpy as np 
import matplotlib.pyplot as plt 

img = np.array(Image.open("../media/Anime-Girl5.png"))
plt.imshow(img)

H,W, D= img.shape

# Code to encode the message
# message = input()
message = "This is Joe Biden"
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

# Code to decode the message
msg = ""
idx = 0
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