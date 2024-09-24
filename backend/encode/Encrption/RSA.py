from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP
import base64

# Generate RSA keys
def generate_keys():
    key = RSA.generate(2048)
    private_key = key.export_key()
    public_key = key.publickey().export_key()
    return private_key, public_key

# Encrypt with public key
def encrypt_rsa(message, public_key):
    rsa_public_key = RSA.import_key(public_key)
    cipher = PKCS1_OAEP.new(rsa_public_key)
    encrypted_bytes = cipher.encrypt(message.encode('utf-8'))
    return base64.b64encode(encrypted_bytes).decode('utf-8')

# Decrypt with private key
def decrypt_rsa(cipher_text, private_key):
    rsa_private_key = RSA.import_key(private_key)
    cipher = PKCS1_OAEP.new(rsa_private_key)
    decrypted_bytes = cipher.decrypt(base64.b64decode(cipher_text))
    return decrypted_bytes.decode('utf-8')

# Example usage
private_key, public_key = generate_keys()
message = "This is a secret message!"

encrypted = encrypt_rsa(message, public_key)
print("Encrypted:", encrypted)

decrypted = decrypt_rsa(encrypted, private_key)
print("Decrypted:", decrypted)
