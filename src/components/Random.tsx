import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {

    const {gif, loading, fetchData} = useGif();

    return(
        <>
            <h3>
                Random GIF Generator
            </h3>

            <div>
                {
                    loading ? (<Spinner />) : (<img src={gif} alt="Random GIF" />)
                }
            </div>

            <button onClick={() => fetchData()}>
                Generate GIF
            </button>
        </>
    );
}

export default Random;