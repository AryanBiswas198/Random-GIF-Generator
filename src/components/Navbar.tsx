import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col sm:flex-row justify-between items-center bg-white px-4 sm:px-10 py-3 border-b-2 border-gray-300">
        <h1 className="text-xl text-black tracking-wider font-bold cursor-pointer">
          GIF Generator
        </h1>
        <div className="flex items-center text-lg tracking-wider gap-x-6 mt-4 sm:mt-0">
          <div className="group relative">
            <a href="https://github.com/AryanBiswas198">
              <svg
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <span
              className="absolute top-11 left-[50%] -translate-x-[50%] 
              z-20 origin-left scale-0 px-3 rounded-lg border 
            border-gray-300 bg-white py-2 text-sm font-bold
              shadow-md transition-all duration-300 ease-in-out 
              group-hover:scale-100"
            >
              GitHub<span></span>
            </span>
          </div>

          <a
            href="https://drive.google.com/file/d/17ZFIwP5JafRdSx9NX_EDXtTCQ1d2kwc_/view?usp=sharing"
            className="cursor-pointer group relative flex gap-1.5 px-2 sm:px-8 bg-white bg-opacity-80 text-black hover:bg-opacity-70 transition font-semibold"
          >
            <svg
              className="bg-black rounded-xl"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
            >
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Interface / Download">
                  {" "}
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="#f1f1f1"
                    d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                    id="Vector"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            Considering to give me a chance?
            <div
              className="absolute top-10 left-[50%] -translate-x-[50%] 
              z-20 origin-left scale-0 px-3 rounded-lg border 
            border-gray-300 bg-white py-2 text-sm font-bold
              shadow-md transition-all duration-300 ease-in-out 
              group-hover:scale-100"
            >
              Resume
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
