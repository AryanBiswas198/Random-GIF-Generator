import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
       <Navbar />
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col w-[70%] items-center justify-center">
            <Random />
            <Tag />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
