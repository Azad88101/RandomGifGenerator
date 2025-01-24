import axios from "axios";
import { useEffect, useState } from "react";
import EmailVerification from "./Components/EmailVerification";
import RandomIGifGenerator from "./Components/RandomIGifGenerator";

import RandomByTag from "./Components/RandomByTag";

// const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
// const API_KEY  = process.env.VITE_GIPHY_API_KEY

const App = () => {
  
//   const fetchData = async () => {
//     try {
//       const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//       const { data } = await axios.get(URL);
//       const Images = await data.data.images.downsized_large.url;
// setGif(Images)
//       console.log(Images); // Log the response data
//     } catch (error) {
//       console.error("Error fetching data:", error); // Handle errors
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

  return (
    <div>
      {/* <EmailVerification/> */}
      <div className="h-screen w-screen flex flex-col backGround  items-center">
        <div className=" text-center text-black text-3xl  bg-[#afcaef] rounded-xl w-[90%]  flex items-center justify-center  mt-[40px]  font-bold uppercase ">
          <h1>Random GIFs</h1>
        </div>
        <div className="flex flex-col w-full  items-center">
          <RandomIGifGenerator  />
          <RandomByTag />
        </div>
      </div>
    </div>
  );
};

export default App;
