import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const API_KEY2 = process.env.REACT_APP_GIPHY_API_KEY2;

interface GifData {
  data: {
    images: {
      downsized_large: {
        url: string;
      };
    };
  };
}

const useGif = (tag?: string) => {
  const [gif, setGif] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      let url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      if (tag) {
        url += `&tag=${tag}`;
      }

      const { data } = await axios.get<GifData>(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (err) {
      console.log("Error Fetching GIF: ", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
