import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white text-center  fixed bottom-0 w-full">
      <div>
        Made with ❤️ by{" "}
        <Link href="https://github.com/aayushker" className="text-blue-400">
          @aayushker
        </Link>{" "}
        
      </div>

    </footer>
  );
};

export default Footer;
