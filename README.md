![Shhh](https://socialify.git.ci/aayushker/Shhh/image?description=1&name=1&owner=1&pattern=Brick%20Wall&theme=Auto)
<div align="center" style="display: flex; flex-direction: column; align-items: center;">

*(under development)*

[![wakatime](https://wakatime.com/badge/user/018dccea-572d-4bff-b35f-74753ebb999c/project/b13b39a4-8233-4fb0-953e-d48c86cacf73.svg)]()
[![Vercel Deploy](https://deploy-badge.vercel.app/vercel/shhh)](https://shhh-apc.vercel.app)
![Render](https://img.shields.io/badge/Render-Deployed-green?logo=render)

</div>
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
    
<br />

## 📜 **Purpose**

The primary purpose of this project is to demonstrate how steganography can be used to encode and decode secret messages within images. The application supports all image formats but due to limitation of lossy image format like JPEG and JPG all image formats are converted to PNG format to ensure that no data is lost during encoding, making it ideal for confidential communications.

<br />

## 🔥 **Features**

- **Encode a Message**: Hide secret messages within an image using least significant bit (LSB) manipulation.
- **Decode a Message**: Retrieve hidden messages from an image that was encoded.
- **Support all Image Formats**: Works with all files to ensure no data is lost during the encoding/decoding process.
- **Custom Encryption**: Uses a combination of encryption strategies (can be customized) to make the message more secure.
- **User-friendly Interface**: Intuitive design for both technical and non-technical users.
- **Error Handling**: Detects if no message is present or if an image format isn't supported.

<br />

## 🖥️ **Technologies Used**

- **Backend**: Django Rest Framework (Python)
- **Frontend**: Next.js, NextUI, AceternityUI, Tailwind CSS
- **Image Processing**: PIL (Python Imaging Library), Numpy
- **Encryption**: Custom LSB-based encoding for steganography
- **API Communication**: Axios
- **Deployment**: Vercel, Docker, Render, Cloudflare

<br />

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

<br />

## 📚 **Usage**

1. **Encode a Message**:
    - Upload a image.
    - Enter the message you want to encode.
    - The encoded image will be processed and available for download.

2. **Decode a Message**:
    - Upload the image with the hidden message.
    - The application will decode and display the hidden message.

<br />

## ⚙️ **API Endpoints**

- **POST `/api/encode/`**: Encodes the provided message into the uploaded image.
    - **Parameters**:
        - `image`: The image file.
        - `text`: The secret message.
    - **Returns**: A downloadable processed image file with the hidden message.

- **POST `/api/decode/`**: Decodes the hidden message from the provided image.
    - **Parameters**:
        - `image`: The image file with the hidden message.
    - **Returns**: The decoded message as text.

<br />

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

<br />

## 🐛 **Known Issues**

- **JPEG Support**: Due to JPEG's lossy compression, it is not supported for encoding messages. So to overcome this issue all the lossy image file types are coverted internally to PNG.
- **Image Distortion**: Encoding very large messages may cause visible distortion in the image.
  
<br />

## 📝 **Future Enhancements**

- **Multilingual Support**: Add support for non-ASCII characters.
- **UI Enhancements**: Improve the user interface for better user experience.
- **Mobile-Friendly Design**: Make the web application responsive for mobile devices.
- **Advanced Encryption**: Implement more secure encryption algorithms for message encoding.

<br />

<!-- 
## 🎨 **Screenshots**

(Placeholder for screenshots of the encoding and decoding interface)

--- -->

## 💡 **Contributing**

Contributions are welcome! Please feel free to submit a pull request or open an issue for suggestions and improvements.

<br />

## 📄 **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.
