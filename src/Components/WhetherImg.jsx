import React from "react";
import { WiHumidity } from "react-icons/wi";
import { GiWhirlwind } from "react-icons/gi";

export default function WhetherImg({
  latitude,
  longtitude,
  degree,
  state,
  countary,
  humidity,
  windspeed,
  loading,
  weatherIcon,
}) {
  //console.log(weatherIcon);
  return (
    <div>
      <div className=" w-full flex justify-center">
        <img src={weatherIcon} alt="clear" className="w-[150px] h-[150px] " />
      </div>
      <div className="flex flex-col gap-2 text-3xl text-center font-semibold uppercase text-slate-700">
        <div>{degree}°C</div>
        <div className="text-yellow-400">{loading ? `loading...` : state}</div>
        <div>{countary}</div>
      </div>
      <div className="flex w-[300px] justify-center gap-7 mx-auto my-4 text-md font-semibold text-slate-700">
        <div className="flex flex-col items-center gap-2">
          <span>Latitude</span>
          <span>{latitude}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span>Longtitude</span>
          <span>{longtitude}</span>
        </div>
      </div>
      <div className="flex justify-evenly gap-28 items-center mb-4">
        <div className="text-slate-700 text-center font-semibold text-md my-2">
          <WiHumidity className="w-10 h-10 ml-2 " />
          <p className="text-center">{humidity}%</p>
          <p className="">Humidity</p>
        </div>
        <div className="text-slate-700 text-center font-semibold text-md">
          <GiWhirlwind className="w-10 h-10 self-center ml-6 " />
          <p>{windspeed}Km/h</p>
          <p>Wind/Speed</p>
        </div>
      </div>
    </div>
  );
}
