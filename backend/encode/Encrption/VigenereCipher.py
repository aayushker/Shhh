def encrypt_VigenereCipher(text, keyword):
    if not keyword.isalpha():
        raise ValueError("Keyword must contain only alphabetic characters")
    
    result = []
    keyword_repeat = (keyword * (len(text) // len(keyword))) + keyword[:len(text) % len(keyword)]
    
    for i in range(len(text)):
        letter = text[i]
        if letter.isalpha():
            shift = ord(keyword_repeat[i].lower()) - 97
            if letter.isupper():
                result.append(chr((ord(letter) + shift - 65) % 26 + 65))
            else:
                result.append(chr((ord(letter) + shift - 97) % 26 + 97))
        else:
            result.append(letter)
    
    return ''.join(result)

def decrypt_VigenereCipher(cipher_text, keyword):
    if not keyword.isalpha():
        raise ValueError("Keyword must contain only alphabetic characters")
    
    result = []
    keyword_repeat = (keyword * (len(cipher_text) // len(keyword))) + keyword[:len(cipher_text) % len(keyword)]
    
    for i in range(len(cipher_text)):
        letter = cipher_text[i]
        if letter.isalpha():
            shift = ord(keyword_repeat[i].lower()) - 97
            if letter.isupper():
                result.append(chr((ord(letter) - shift - 65) % 26 + 65))
            else:
                result.append(chr((ord(letter) - shift - 97) % 26 + 97))
        else:
            result.append(letter)
    
    return ''.join(result)