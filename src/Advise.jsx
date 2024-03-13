import React from "react";
import { useState } from "react";

export default function Advise() {
  const [advise, setadvise] = useState(
    "Please click to below button to Get Advise "
  );
  console.log(advise);
  const [count, setcount] = useState(0);

  const handleClick = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setadvise(data);
    setcount((e) => e + 1);
  };

  return (
    <div className="container bg-slate-200">
      <div className="flex items-center flex-col gap-6 text-xl  ">
        <h1 className=" text-lg font-semibold ">{advise.slip.advice}</h1>
        <button
          className="font-semibold bg-slate-600 text-white p-3 rounded-lg hover:opacity-95 hover:shadow-lg outline-none border-none"
          onClick={handleClick}
        >
          Get Advise
        </button>
        <p>
          You have read a{" "}
          <b className="bg-slate-300 p-2 rounded-full text-center m-2">
            {" "}
            {count}{" "}
          </b>{" "}
          pieces of Advise...
        </p>
      </div>
    </div>
  );
}
