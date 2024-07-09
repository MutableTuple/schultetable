import React from "react";
import { SiTablecheck } from "react-icons/si";
const Logo = () => {
  return (
    <div className="flex justify-between items-center gap-4 ">
      {/* <SiTablecheck size={36} color="#444444" /> */}
      <img
        className="w-8 h-8 bg-stone-50 rounded-md"
        src="https://raw.githubusercontent.com/MutableTuple/schultetableimg/main/icons.png"
        alt=""
      />
      <h1 className="font-bold text-2xl">Schultetable.com</h1>
    </div>
  );
};

export default Logo;
