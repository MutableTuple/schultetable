import React from "react";
import Logo from "./Logo";
const Header = () => {
  return (
    <header className="py-4 md:px-6 w-ful items-center">
      <div className="max-w-7xl mx-auto flex gap-4">
        <Logo />
      </div>
      <div className="w-full bg-yellow-400/60 h-0.5 mt-4"></div>
    </header>
  );
};

export default Header;
