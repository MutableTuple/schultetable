import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <footer className=" text-orange-400 py-4 px-6 rounded-md grid gri">
      <div className="flex gap-2 items-center justify-center md:justify-end">
        <a
          href="https://www.linkedin.com/in/yogesh-vishwakarma-bb132721a/"
          target="_blank"
        >
          <FaLinkedinIn color="#ff9263" size={24} />
        </a>
        <a href="https://x.com/TupleMutable" target="_blank">
          <FaXTwitter color="#ff9263" size={24} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCvDf9cq7iyf8hqaJvV_XjEg"
          target="_blank"
        >
          <IoLogoYoutube color="#ff9263" size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
