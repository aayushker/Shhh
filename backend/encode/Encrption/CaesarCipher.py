def encrypt_CaesarCipher(text, shift):
    result = ""
    for char in text:
        if char.isupper():
            result += chr((ord(char) + shift - 65) % 26 + 65)
        elif char.islower():
            result += chr((ord(char) + shift - 97) % 26 + 97)
        else:
            result += char
    return result

def decrypt_CaesarCipher(cipher_text, shift):
    return encrypt_CaesarCipher(cipher_text, -shift)