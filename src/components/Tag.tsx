import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {

    const [tag, setTag] = useState<string>("car");
    const {gif, loading, fetchData} = useGif(tag);

    return(
        <>
            <h3>
                Random Tag Generator
            </h3>

            <div>
                {
                    loading ? (<Spinner />) : (<img src={gif} alt="Random Tag GIF" />)
                }
            </div>

            <input type="text" placeholder="Enter Tag"
                onChange={(e) => setTag(e.target.value)} />

            <button onClick={() => fetchData()}>
                Generate 
            </button>
        </>
    )
};

export default Tag;