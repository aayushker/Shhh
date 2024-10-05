import React, { useState, useRef } from "react";
import { Card, Image, Button, Divider, Textarea } from "@nextui-org/react";
import axios from "axios";

const Decode = () => {
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
      const response = await axios.post(
        "http://localhost:8000/api/decode/",
        formData
      );

      const mssg = response.data;
      setMessage(mssg);
      setConfirmation("Image processed successfully!");
    } catch (error) {
      setConfirmation("An error occurred while processing the image.");
    }
  };

  return (
    <div>
      <p className="text-2xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Add your <strong className="text-red-400">image</strong> to{" "}
        <strong className="text-red-400">decode</strong> the hidden{" "}
        <strong className="bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent">
          message
        </strong>
      </p>
      <Card isBlurred className="max-w-lg w-full mx-auto p-6 my-12">
        <div
          className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-4 cursor-pointer"
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {image ? (
            <Image
              src={image as string}
              alt="Uploaded Image"
              className="w-full h-auto max-h-24"
            />
          ) : (
            <div className="text-center">
              <p className="text-gray-500">
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
        <Button className="mt-4 hover:bg-green-400" onClick={handleSubmit}>
          Submit
        </Button>
        {confirmation && <p className="mt-4 text-center">{confirmation}</p>}
        {message && (
          <div className="mt-4 text-center">
            <Textarea readOnly value={message} label="The hidden message is- "/>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Decode;