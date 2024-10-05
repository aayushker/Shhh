import React from "react";

const Learn = () => {
  return (
    <div className="container mx-auto p-4">
      <p className="text-2xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
        Learn about <strong>Shh</strong>
      </p>
      <div className="section">
        <p className="section-title text-xl sm:text-3xl font-semibold mb-4">🧐 What is Steganography?</p>
        <p className="section-content text-base sm:text-lg leading-relaxed">
          Steganography is the practice of hiding information within other
          non-secret data. It differs from encryption, where the goal is to make
          the hidden data unintelligible to anyone who doesn't have the
          decryption key. Instead, steganography aims to conceal the existence
          of the information itself. Here at Shhh, we implement this concept by
          hiding secret messages inside images.
        </p>
      </div>
      <div className="section mt-8">
        <p className="section-title text-xl sm:text-3xl font-semibold mb-4">🎯 Purpose of Shhh</p>
        <p className="section-content text-base sm:text-lg leading-relaxed">
          Shhh provides a secure way to encode your sensitive messages inside an
          image, making the existence of the message hidden from prying eyes.
          Not only do we focus on security, but we also ensure that the output
          images look nearly identical to the original ones (thanks to lossless
          image encoding). Whether you're trying to communicate discreetly or
          add an extra layer of security to your messages, Shhh is the perfect
          solution.
        </p>
      </div>
      <div className="section mt-8">
        <p className="section-title text-xl sm:text-3xl font-semibold mb-4">🔐 How to Use Shhh</p>
        <p className="section-content text-base sm:text-lg leading-relaxed">
          <strong>1. Encoding a Message</strong><br />
          Go to the Encode page. Upload a lossless image like .png or .bmp (JPEG is not recommended as
          it's a lossy format). Enter the secret message you want to hide. Click
          Encode. Download the processed image that contains your hidden
          message. The image will look identical to the original image to the
          naked eye but secretly contains your message.<br /><br />
          <strong>2. Decoding a Message</strong><br />
          Go to the Decode page. Upload the image with the hidden message. Click
          Decode. Your secret message will be extracted and displayed. It's that
          simple! You can use Shhh to share hidden messages securely with
          friends, colleagues, or anyone who needs to know.
        </p>
      </div>
      <div className="section mt-8">
        <p className="section-title text-xl sm:text-3xl font-semibold mb-4">Why Use Shhh?</p>
        <p className="section-content text-base sm:text-lg leading-relaxed">
          ✅ <strong>Simple, Secure, and Fast</strong><br />
          We offer a simple, user-friendly interface for encoding and decoding hidden messages.
          Shhh uses the Least Significant Bit (LSB) technique to ensure
          messages are securely embedded without distorting the image.<br /><br />
          📈 <strong>Advanced Features</strong><br />
          In addition to LSB, our encoding process supports
          additional encryption layers like AES encryption for even more
          protection. You can combine encryption and steganography for the
          highest level of security.
        </p>
      </div>
      <div className="section mt-8">
        <p className="section-title text-xl sm:text-3xl font-semibold mb-4">Use Cases</p>
        <p className="section-content text-base sm:text-lg leading-relaxed">
          Secure Communication: Hide sensitive information in images
          without drawing attention to the fact that you're even sending a
          secret. Watermarking: Insert invisible watermarks in images for
          copyright protection. Covert Data Transfer: Share data without it
          being detectable as a message. Digital Signatures: Add hidden
          signatures to images to prove authenticity.
        </p>
      </div>
      <div className="section mt-8">
        <p className="section-title text-xl sm:text-3xl font-semibold mb-4">Behind the Scenes: How It Works</p>
        <p className="section-content text-base sm:text-lg leading-relaxed">
          At the heart of Shhh, we use the Least Significant Bit (LSB) encoding technique. Here's a simple
          breakdown of how it works: Every image is made up of pixels, and each
          pixel has color values. In LSB encoding, the least important bits of
          pixel values are replaced with the bits of the message. Since these
          bits are the "least significant," altering them doesn't change the
          appearance of the image, but your message is securely hidden inside.
          We ensure to use lossless image formats like PNG or BMP to preserve
          image quality while encoding, and our algorithm ensures minimal
          distortion even when embedding complex messages.
        </p>
      </div>
      <div className="section mt-8">
        <p className="section-title text-xl sm:text-3xl font-semibold mb-4">Frequently Asked Questions (FAQ)</p>
        <p className="section-content text-base sm:text-lg leading-relaxed">
          ❓ <strong>Is my message safe in the image?</strong><br />
          Yes! While the image looks unchanged, the message is hidden in the
          least significant bits. You can also combine this with AES encryption
          for additional security.<br /><br />
          ❓ <strong>Can I use any image format?</strong><br />
          We recommend using lossless image formats such as PNG or BMP to avoid issues with
          image quality or message extraction.<br /><br />
          ❓ <strong>How long can my message be?</strong><br />
          The length of the message you can hide depends on the size and format
          of the image. Larger images can hold more data, but for most standard
          messages, an average-sized PNG will work fine.<br /><br />
          ❓ <strong>What if my message is too long?</strong><br />
          If the message exceeds the image's capacity, we'll notify
          you, and you'll need to shorten the message or use a larger image.
        </p>
      </div>
      <div className="section mt-8">
        <p className="section-title text-xl sm:text-3xl font-semibold mb-4">Ready to Get Started?</p>
        <p className="section-content text-base sm:text-lg leading-relaxed">
          Head over to the Encode or Decode pages to try
          Shhh for yourself. Hide your messages, secure your communication,
          and decode them with ease!
        </p>
      </div>
    </div>
  );
};

export default Learn;