import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center  bg-white px-10 py-3 border-b-2 border-gray-300">
        <h1 className="text-xl text-black tracking-wider font-bold cursor-pointer">GIF Generator</h1>
        <div className="flex items-center text-lg tracking-wider gap-x-6">
          <a
            href="https://github.com/AryanBiswas198"
            className="text-gray-700 hover:text-black mr-4"
          >
            GitHub
          </a>
          <a
            href="https://drive.google.com/file/d/17ZFIwP5JafRdSx9NX_EDXtTCQ1d2kwc_/view?usp=sharing"
            className="text-gray-700 hover:text-black"
          >
            Resume
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
