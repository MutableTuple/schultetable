import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

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
          <a
            href="https://www.producthunt.com/posts/schulte-table?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-schulte&#0045;table"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=469788&theme=dark"
              alt="Schulte&#0032;Table - Train&#0032;your&#0032;brain | Product Hunt"
              width="250"
              height="54"
            />
          </a>
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
