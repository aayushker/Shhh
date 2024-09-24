from cryptography.fernet import Fernet

# Generate a key
key = Fernet.generate_key()
cipher = Fernet(key)

# Encrypt
message = "This is a secret message!"
encrypted = cipher.encrypt(message.encode())
print("Encrypted:", encrypted)

# Decrypt
decrypted = cipher.decrypt(encrypted).decode()
print("Decrypted:", decrypted)
