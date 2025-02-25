import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const RandomByTag = () => {
  const [Loading, setLoading] = useState(true);
  const [TagData, setTagData] = useState("cat");
  const [Gif, setGif] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true); 
      const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${TagData}`;
      const { data } = await axios.get(URL);
      const Images = data.data.images.downsized_large.url;
      setGif(Images);
      setTimeout(() => {
        setLoading(false); 
      }, 1000);
      // console.log(Images);
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

  const changeHandler = (e) => {
    setTagData(e.target.value);
    console.log(TagData);
  };

  return (
    <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] bg-green-500 gap-y-5 rounded-xl mt-4 flex flex-col items-center p-4 border border-gray-900 transition-all hover:shadow-xl hover:bg-green-600">
      <h1 className="text-3xl underline font-semibold mb-5 mt-3 uppercase text-black">
        Random {TagData} Gif
      </h1>
      {Loading ? (
        <div className="spinner"></div>
      ) : (
        <img src={Gif} alt="Random gif" width={400} />
      )}

      <input
        value={TagData}
        onChange={changeHandler}
        type="text"
        className="text-center py-3 mt-5 text-xl font-semibold rounded-xl w-full bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <button
        className="py-3 mb-10 text-xl font-semibold rounded-xl w-full bg-white/75 hover:bg-white transition-all duration-300"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default RandomByTag;
