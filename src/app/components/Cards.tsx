import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 m-8">
        <div>
          <Image
            src={"/imageWebsite.5c6ae62f.jpg"}
            alt="card"
            width={450}
            height={250}
          />
        </div>
        <div>
          <Image
            src={"/imageWebsite2.a102c7b5.jpg"}
            alt="card"
            width={1700}
            height={250}
          />
        </div>
        <div>
          <Image
            src={"/imageWebsite3.b845fe78.jpg"}
            alt="card"
            width={450}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
