import { Button, Link } from "@nextui-org/react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useEffect } from "react";

const Hero = () => {
  const url = process.env.NEXT_PUBLIC_url;

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await axios.get(`${url}`);
        if (response.status === 200) {
          toast.success("Backend is now active!", {
            position: "bottom-right",
            toastId: "backend-active",
          });
        }
      } catch (error) {
        toast.error("Unable to connect to backend.", {
          position: "bottom-right",
          toastId: "backend-error",
        });
      }
    };
    checkBackend();
  }, []);
  return (
    <div className="flex align-middle justify-center">
      <ToastContainer />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Hide Your Secrets Like a Spy
        </p>
        <div className="flex justify-center align-middle">
          <Button className="bg-success">
            <Link href="/learn" className="text-inherit">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
