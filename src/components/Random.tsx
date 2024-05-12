import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="flex flex-col items-center bg-white border-2 border-gray-300 rounded-xl p-4 h-96 w-3/4 mb-10 ">
      <h3 className="text-xl font-semibold tracking-wider mb-4">
        Random GIF Generator
      </h3>
      <div className="flex justify-center items-center mb-4 h-60 w-96">
        {loading ? (
          <Spinner />
        ) : (
          <img src={gif} alt="Random GIF" className="h-60 w-96" />
        )}
      </div>
      <button
        onClick={() => fetchData()}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Generate GIF
      </button>
    </div>
  );
};

export default Random;
