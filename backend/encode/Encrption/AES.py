from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
import base64

# Padding to ensure the message length is a multiple of 16 bytes (required by AES)
def pad(text):
    while len(text) % 16 != 0:
        text += ' '
    return text

# Encrypt
def encrypt_aes(message, key):
    cipher = AES.new(key, AES.MODE_ECB)
    encrypted_bytes = cipher.encrypt(pad(message).encode('utf-8'))
    return base64.b64encode(encrypted_bytes).decode('utf-8')

# Decrypt
def decrypt_aes(cipher_text, key):
    cipher = AES.new(key, AES.MODE_ECB)
    decrypted_bytes = cipher.decrypt(base64.b64decode(cipher_text))
    return decrypted_bytes.decode('utf-8').strip()

# Example usage
key = get_random_bytes(16)  # AES requires a key of 16, 24, or 32 bytes
message = "This is a secret message!"
encrypted = encrypt_aes(message, key)
print("Encrypted:", encrypted)

decrypted = decrypt_aes(encrypted, key)
print("Decrypted:", decrypted)
