import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const RandomIGifGenerator = () => {
  const [Loading, setLoading] = useState(true);
  const [Gif, setGif] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true); 
      const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const { data } = await axios.get(URL);
      const Images = data.data.images.downsized_large.url;
      setGif(Images);
      setLoading(false); 
      console.log(Images);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      alert("Too many requests. Please try again later.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickHandler = () => {
    setLoading(true);
    fetchData();
  };

  return (
    <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] bg-emerald-500 gap-y-10 rounded-xl mt-4 flex flex-col items-center p-5 border border-gray-900 transition-all hover:shadow-xl">
      <h1 className="text-3xl underline font-semibold mt-3 uppercase text-black">
        A Random Gif
      </h1>
      {Loading ? (
        <div className="spinner"></div>
      ) : (
        <img src={Gif} alt="Random gif" width={400} className="max-w-full" />
      )}
      <button
        className="py-3 mb-10 text-xl font-semibold rounded-xl w-full sm:w-[80%] bg-white/75 hover:bg-white transition-all duration-300"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default RandomIGifGenerator;
