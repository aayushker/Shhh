def caesar_cipher_encrypt(text, shift):
    result = ""
    for i in range(len(text)):
        char = text[i]
        if char.isupper():
            result += chr((ord(char) + shift - 65) % 26 + 65)
        else:
            result += chr((ord(char) + shift - 97) % 26 + 97)
    return result

def caesar_cipher_decrypt(cipher_text, shift):
    return caesar_cipher_encrypt(cipher_text, -shift)

# Example usage
message = "This is a secret message!"
shift = 3

encrypted = caesar_cipher_encrypt(message, shift)
print("Encrypted:", encrypted)

decrypted = caesar_cipher_decrypt(encrypted, shift)
print("Decrypted:", decrypted)
