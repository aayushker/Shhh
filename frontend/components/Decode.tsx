import React, { useState, useRef } from "react";
import { Card, Image, Button, Divider, Textarea } from "@nextui-org/react";
import axios from "axios";

const Decode = () => {
  const url = process.env.NEXT_PUBLIC_url;

  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [message, setMessage] = useState<string>("");
  const [confirmation, setConfirmation] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      setConfirmation("Please upload an image");
      return;
    }

    const formData = new FormData();
    const blob = await fetch(image as string).then((res) => res.blob());
    formData.append("image", blob);

    try {
      const response = await axios.post(`${url}/api/decode/`, formData);
      const mssg = response.data;
      setMessage(mssg);
      setConfirmation("Image processed successfully!");
    } catch (error) {
      setConfirmation("An error occurred while processing the image.");
    }
  };

  return (
    <div className="px-4 py-6 sm:px-6 md:px-12 lg:px-20">
      <p className="text-2xl sm:text-4xl md:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
        Add your <strong className="text-red-400">image</strong> to{" "}
        <strong className="text-red-400">decode</strong> the hidden{" "}
        <strong className="bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent">
          message
        </strong>
      </p>
      <Card
        isBlurred
        className="max-w-md w-full mx-auto p-4 sm:p-6 my-8 md:my-12 bg-opacity-50"
      >
        <div
          className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-4 cursor-pointer h-64 md:h-80 w-full"
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {image ? (
            <Image
              src={image as string}
              alt="Uploaded Image"
              className="w-fit h-fit max-h-full"
            />
          ) : (
            <div className="text-center">
              <p className="text-gray-500 text-sm md:text-lg">
                Click to upload or drag and drop an image
              </p>
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <Divider className="my-4" />
        <Button className="mt-4 w-full bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-l" onClick={handleSubmit}>
          Submit
        </Button>
        {confirmation && (
          <p className="mt-4 text-center text-sm md:text-base">
            {confirmation}
          </p>
        )}
        {message && (
          <div className="mt-4 text-center">
            <Textarea
              readOnly
              value={message}
              label="The hidden message is- "
              className="text-sm md:text-base"
            />
          </div>
        )}
      </Card>
    </div>
  );
};

export default Decode;
