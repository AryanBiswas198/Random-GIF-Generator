import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center mb-8">
        {/* Logo */}
        <img src="" alt="Logo" className="h-8 w-auto" />

        {/* Heading */}
        <h1 className="text-3xl text-black font-bold">GIF Generator</h1>

        {/* Buttons */}
        <div className="flex items-center">
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
