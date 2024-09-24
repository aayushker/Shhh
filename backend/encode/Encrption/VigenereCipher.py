def vigenere_encrypt(text, keyword):
    result = []
    keyword_repeat = (keyword * (len(text) // len(keyword))) + keyword[:len(text) % len(keyword)]
    
    for i in range(len(text)):
        letter = text[i]
        if letter.isalpha():
            shift = ord(keyword_repeat[i].lower()) - 97
            result.append(chr((ord(letter.lower()) + shift - 97) % 26 + 97))
        else:
            result.append(letter)
    
    return ''.join(result)

def vigenere_decrypt(cipher_text, keyword):
    result = []
    keyword_repeat = (keyword * (len(cipher_text) // len(keyword))) + keyword[:len(cipher_text) % len(keyword)]
    
    for i in range(len(cipher_text)):
        letter = cipher_text[i]
        if letter.isalpha():
            shift = ord(keyword_repeat[i].lower()) - 97
            result.append(chr((ord(letter.lower()) - shift - 97) % 26 + 97))
        else:
            result.append(letter)
    
    return ''.join(result)

# Example usage
message = "This is a secret message!"
keyword = "key"

encrypted = vigenere_encrypt(message, keyword)
print("Encrypted:", encrypted)

decrypted = vigenere_decrypt(encrypted, keyword)
print("Decrypted:", decrypted)
