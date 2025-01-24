import axios from "axios";
import { useEffect, useState } from "react";
import EmailVerification from "./Components/EmailVerification";
import RandomIGifGenerator from "./Components/RandomIGifGenerator";
import RandomByTag from "./Components/RandomByTag";

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center backGround bg-cover bg-center p-5">
      {/* Header */}
      <div className="text-center text-black text-3xl bg-[#afcaef] rounded-xl w-[90%] md:w-[70%] lg:w-[50%] p-4 mt-6 font-bold uppercase shadow-lg">
        <h1>Random GIFs</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full items-center gap-y-6 mt-6 px-4">
        <RandomIGifGenerator />
        <RandomByTag />
      </div>
    </div>
  );
};

export default App;
