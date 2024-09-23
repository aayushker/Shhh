import React from "react";
import { Card, Image, Button, Input, Divider, CardHeader, Textarea } from "@nextui-org/react";
import axios from "axios";

const Encode = () => {
  return (
    <Card fullWidth isBlurred className=" max-w-screen-xl mx-auto p-6 my-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <Divider orientation="vertical" className="hidden lg:block mx-4" />

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end p-4">
            <Image src="/images/encrypted.gif" height={400} />
          </div>
          <div className="w-full lg:w-1/2 max-w-md p-4">
            <Input
              fullWidth
              size="lg"
              type="image"
              label="Name"
              placeholder="Add the image"
              className="mb-4"
              // value={formData.name}
              // onChange={handleChange}
            />
            <Input
              fullWidth
              size="lg"
              type="email"
              label="Email"
              placeholder="Enter your Email"
              className="mb-4"
              // value={formData.email}
              // onChange={handleChange}
            />
            <Input
              fullWidth
              size="lg"
              type="text"
              label="Subject"
              placeholder="Enter your Subject"
              className="mb-4"
              // value={formData.subject}
              // onChange={handleChange}
            />
            <Textarea
              fullWidth
              size="lg"
              type="text"
              label="Message"
              placeholder="Enter your Feedback"
              className="mb-4"
              rows={4}
              // value={formData.message}
              // onChange={handleChange}
            />
            <div className="flex justify-center align-middle">
              <Button
                className="mt-4 hover:bg-green-400"
                type="submit"
                // onClick={handleSubmit}
                // onSubmit={handleSubmit}
                // disabled={loading}
              >
                {/* {loading ? <Spinner /> : "Submit"} */}
              </Button>
            </div>
          </div>
        </div>

        <Divider className="block lg:hidden my-4" />
      </Card>
  );
};

export default Encode;