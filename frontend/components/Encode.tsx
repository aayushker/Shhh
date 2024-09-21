import React from "react";
import { Card, Image, Button, Input, Divider } from "@nextui-org/react";
import axios from "axios";

const Encode = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Card fullWidth isBlurred className="mx-auto p-6 my-12 max-w-lg">
        <div className="flex flex-col items-center">
          <Divider className="w-full mb-4" />

          <div className="w-full flex justify-center p-4">
            <Image src="/images/contact.png" height={200} />
          </div>
          <div className="w-full max-w-md p-4">
            <Input
              fullWidth
              size="lg"
              type="text"
              label="Name"
              placeholder="Enter your Name"
              className="mb-4"
            />
            <Input
              fullWidth
              size="lg"
              type="email"
              label="Email"
              placeholder="Enter your Email"
              className="mb-4"
            />
            <Input
              fullWidth
              size="lg"
              type="file"
              label="Upload Image"
              className="mb-4"
            />
            <Input
              fullWidth
              size="lg"
              type="text"
              label="Text"
              placeholder="Enter your Text"
              className="mb-4"
            />
            <div className="flex justify-center items-center">
              <Button className="mt-4 hover:bg-green-400">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <Divider className="w-full mt-4" />
      </Card>
    </div>
  );
};

export default Encode;