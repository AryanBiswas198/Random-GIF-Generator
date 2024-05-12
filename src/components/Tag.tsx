import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState<string>("Car");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="flex flex-col items-center bg-white border-2 border-gray-300 rounded-xl p-4 h-auto w-[45%] md:w-[60%] lg:w-[75%] min-w-[20rem] mb-10 pb-6">
      <h3 className="text-xl font-semibold tracking-wider mb-4">
        Random Tag Generator
      </h3>

      <div className="flex justify-center items-center h-60 w-96 mb-10">
        {loading ? (
          <Spinner />
        ) : (
          <img
            src={gif}
            alt="Random Tag GIF"
            className="h-60 w-64 md:w-72 lg:w-96"
          />
        )}
      </div>

      <label
        htmlFor="tagInput"
        className="mb-4 left-0 font-medium text-lg text-gray-800"
      >
        Enter Tag:
      </label>

      <div className="flex flex-col lg:flex-row gap-x-10 gap-y-1">
        <input
          className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-blue-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 shadow-md focus:shadow-lg focus:shadow-blue-400 mb-4 md:mb-2 md:mr-4"
          placeholder="Search GIF's"
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />

        <button
          onClick={() => fetchData()}
          className="invert hover:rotate-2 brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-0 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600"
        >
          <div className="px-6 py-2 backdrop-blur-xl bg-black/80 rounded-xl font-bold w-full h-full">
            <div className="group-hover:scale-100 flex group-hover:text-yellow-500 text-yellow-600 gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                className="w-6 h-6 stroke-yellow-600 group-hover:stroke-yellow-500 group-hover:stroke-{1.99}"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                ></path>
              </svg>
              Generate Now
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Tag;
