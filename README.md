# Image Steganography Web Application

A web-based application that allows users to hide secret messages within images (using steganography) and later decode them. This project implements custom encryption techniques to ensure a secure and reliable way of hiding data within images.

## Table of Contents

  - [📜 **Purpose**](#-purpose)
  - [🔥 **Features**](#-features)
  - [🖥️ **Technologies Used**](#️-technologies-used)
  - [🚀 **Getting Started**](#-getting-started)
  - [📚 **Usage**](#-usage)
  - [⚙️ **API Endpoints**](#️-api-endpoints)
  - [🛠️ **Custom Encryption**](#️-custom-encryption)
  - [🐛 **Known Issues**](#-known-issues)
  - [📝 **Future Enhancements**](#-future-enhancements)
  - [💡 **Contributing**](#-contributing)
  - [📄 **License**](#-license)
  - [🤝 **Acknowledgments**](#-acknowledgments)

## 📜 **Purpose**

The primary purpose of this project is to demonstrate how steganography can be used to encode and decode secret messages within images. The application supports lossless image formats such as PNG, BMP, and TIFF to ensure that no data is lost during encoding, making it ideal for confidential communications.

---

## 🔥 **Features**

- **Encode a Message**: Hide secret messages within an image using least significant bit (LSB) manipulation.
- **Decode a Message**: Retrieve hidden messages from an image that was encoded.
- **Support for Lossless Image Formats**: Works with `.png`, `.bmp`, and `.tiff` files to ensure no data is lost during the encoding/decoding process.
- **Custom Encryption**: Uses a combination of encryption strategies (can be customized) to make the message more secure.
- **User-friendly Interface**: Intuitive design for both technical and non-technical users.
- **Error Handling**: Detects if no message is present or if an image format isn't supported.

---

## 🖥️ **Technologies Used**

- **Backend**: Django Rest Framework (Python)
- **Frontend**: Next.js, NextUI, AceternityUI, Tailwind CSS
- **Image Processing**: PIL (Python Imaging Library), Numpy
- **Encryption**: Custom LSB-based encoding for steganography
- **API Communication**: Axios

---

## 🚀 **Getting Started**

### Prerequisites

Ensure you have the following installed:

- **Python**
- **Pipenv**
- **Node.js**
- **NPM**

## Installation

### Backend Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/aayushker/Shhh.git
   cd Shhh/backend
2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate
3. **Install dependencies:**
   ```bash
    pip install -r requirements.txt
4. **Run the development server:**
    ```bash
    python manage.py runserver
### Frontend Setup
1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend
2. **Install dependencies:**
   ```bash
    npm install
3. **Run the development server:**
    ```bash
    npm run dev

## 📚 **Usage**

1. **Encode a Message**:
    - Upload a lossless image (PNG/BMP/TIFF).
    - Enter the message you want to encode.
    - The encoded image will be processed and available for download.

2. **Decode a Message**:
    - Upload the image with the hidden message.
    - The application will decode and display the hidden message.

---

## ⚙️ **API Endpoints**

- **POST `/api/encode/`**: Encodes the provided message into the uploaded image.
    - **Parameters**:
        - `image`: The image file (PNG/BMP/TIFF).
        - `text`: The secret message.
    - **Returns**: A downloadable processed image file with the hidden message.

- **POST `/api/decode/`**: Decodes the hidden message from the provided image.
    - **Parameters**:
        - `image`: The image file with the hidden message.
    - **Returns**: The decoded message as text.

---

## 🛠️ **Custom Encryption**

This project uses a simple LSB (Least Significant Bit) encoding technique to hide the message in the image's pixel values. You can extend or modify this encoding process to include additional encryption layers such as:

- **AES Encryption**: Apply AES encryption before encoding the message.
- **Base64 Encoding**: Encode the message in Base64 format before hiding it.
- **Caesar Cipher**: Apply a Caesar cipher to the message before encoding.
- **Fernet Encryption**: Use the Fernet symmetric encryption algorithm for secure encoding.
- **RSA Encryption**: Implement RSA encryption for public-key cryptography.
- **Vigenère Cipher**: Apply a Vigenère cipher to the message before encoding.
- **Password Protection**: Require a password to decode the message.
- **Bit Manipulation**: Use more sophisticated bit manipulation for additional security.

---

## 🐛 **Known Issues**

- **JPEG Support**: Due to JPEG's lossy compression, it is not supported for encoding messages. Only lossless formats like PNG, BMP, and TIFF are supported.
- **Image Distortion**: Encoding very large messages may cause visible distortion in the image.

---

## 📝 **Future Enhancements**

- **Multilingual Support**: Add support for non-ASCII characters.
- **UI Enhancements**: Improve the user interface for better user experience.
- **Mobile-Friendly Design**: Make the web application responsive for mobile devices.
- **Advanced Encryption**: Implement more secure encryption algorithms for message encoding.

---
<!-- 
## 🎨 **Screenshots**

(Placeholder for screenshots of the encoding and decoding interface)

--- -->

## 💡 **Contributing**

Contributions are welcome! Please feel free to submit a pull request or open an issue for suggestions and improvements.

---

## 📄 **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## 🤝 **Acknowledgments**

- Inspiration from various steganography projects online.
- The developers of PIL and Numpy for making image processing so accessible in Python.
