import base64

# Encode
message = "This is a secret message!"
encoded = base64.b64encode(message.encode('utf-8')).decode('utf-8')
print("Encoded:", encoded)

# Decode
decoded = base64.b64decode(encoded).decode('utf-8')
print("Decoded:", decoded)
