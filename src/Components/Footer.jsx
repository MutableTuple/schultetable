import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Notification from "./Notification";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="text-orange-400 py-4 px-6 rounded-md grid gri">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 ">
          <button onClick={() => navigate(-1)} className="text-orange-400">
            Back
          </button>
          <button onClick={() => navigate(1)} className="text-orange-400">
            Forward
          </button>
        </div>
        <div className="flex gap-2 items-center justify-between md:justify-end">
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/yogesh-vishwakarma-bb132721a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn color="#ff9263" size={24} />
            </a>
            <a
              href="https://x.com/TupleMutable"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter color="#ff9263" size={24} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCvDf9cq7iyf8hqaJvV_XjEg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoYoutube color="#ff9263" size={24} />
            </a>
            <Link to="/blog" className="text-orange-400">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
