from cryptography.fernet import Fernet

# Encrypt
def encrypt_Fernet(message):
    # Generate a key
    key = Fernet.generate_key()
    cipher = Fernet(key)
    
    encrypted = cipher.encrypt(message.encode())
    return encrypted, key

# Decrypt
def decrypt_Fernet(message, key):
    try:
        cipher = Fernet(key)
        decrypted = cipher.decrypt(message).decode()
        return decrypted
    except Exception as e:
        return f'Error occurred: {e}'