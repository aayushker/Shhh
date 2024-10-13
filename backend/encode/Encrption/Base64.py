import base64

# Encode
def encrypt_Base64(message):
    encoded = base64.b64encode(message.encode('utf-8')).decode('utf-8')
    return encoded

# Decode
def decrypt_Base64(message):
    try:
        decoded = base64.b64decode(message).decode('utf-8')
        return decoded
    except (base64.binascii.Error, UnicodeDecodeError) as e:
        return f'Error occurred: {e}'