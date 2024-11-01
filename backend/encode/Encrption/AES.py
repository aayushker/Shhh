from Crypto.Cipher import AES
import base64

# Padding to ensure the message length is a multiple of 16 bytes (required by AES)
def pad(text):
    while len(text) % 16 != 0:
        text += ' '
    return text

# Encrypt
def encrypt_aes(message, secretKey):
    cipher = AES.new(secretKey, AES.MODE_ECB)
    encrypted_bytes = cipher.encrypt(pad(message).encode('utf-8'))
    return base64.b64encode(encrypted_bytes).decode('utf-8')

# Decrypt
def decrypt_aes(cipher_text, secretKey):
    cipher = AES.new(secretKey, AES.MODE_ECB)
    decrypted_bytes = cipher.decrypt(base64.b64decode(cipher_text))
    return decrypted_bytes.decode('utf-8').strip()