import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 ">
    <div className="grid grid-cols-[700px,1000px] min-h-screen text-center min-w-32">
      <div className="max-w-4xl ml-24 mt-28 font-sans font-extrabold gap-y-48 text-10xl m-36 ">
        <h1 className="text-4xl text-[#044e83] mt-5">Governor Sindh</h1>
        <h1 className="text-3xl text-[#044e83] mt-1">Kamran khan Tessori</h1>
        <h1 className="text-3xl text-[#2a73a7] mt-5">Certified Cloud Applied Generative AI Engineer (GenEng)</h1>
        <p className="text-2xl text-[#044e83] mt-5">Earn up to $5,000 / month</p>
        <p className="text-2xl text-[#044e83] mt-2">Now Admission Are Open in Karachi</p>
        <button className="w-32 bg-[#044e83] rounded-md  text-white font-sans py-3 mt-2 ml-10 ">Apply NOw</button>
      </div>
      <div>
        <Image src={"/cover.1d863e39.png"} alt="cover" width={1600} height={1212} className=" mt-5"/>
      </div>
    </div>
  </div>
  
  );
};

export default Hero;
