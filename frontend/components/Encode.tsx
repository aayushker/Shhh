import React, { useState, useRef } from "react";
import {
  Card,
  Image,
  Button,
  Input,
  Divider,
  CardHeader,
  Textarea,
} from "@nextui-org/react";

const Encode = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
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

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <p className="text-2xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Add your <strong className="text-red-400">image</strong> and the <strong className="text-red-400">message</strong> to <strong className="bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent">hide</strong>
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
              className="w-full h-auto"
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
        <Textarea
          fullWidth
          size="lg"
          label="Text"
          placeholder="Enter your Text"
          className="mb-4"
        />
        <Button className="mt-4 hover:bg-green-400">Submit</Button>
      </Card>
    </div>
  );
};

export default Encode;
