import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Clear from "./assets/clear.png";
import Cloud from "./assets/cloud.webp";
import Drizzle from "./assets/drizzle.png";
import Rain from "./assets/rain.png";
import Snow from "./assets/snow.webp";
//import Wind from "./assets/wind.webp";
import WhetherImg from "./Components/WhetherImg";

export default function Whether() {
  const Api_key = "0ade86ba2fe3c5af0b23113c50432265";
  const [degree, setdegree] = useState(0);
  const [state, setstate] = useState("Madurai");
  const [countary, setcountary] = useState("In");
  const [latitude, setlotitude] = useState(0);
  const [Longtitude, setLongtitude] = useState(0);
  const [humidity, sethumidity] = useState(0);
  const [windspeed, setwindspeed] = useState(0);
  const [loading, setloading] = useState(false);
  const [weatherIcon, setweatherIcon] = useState(Cloud);
  const [error, seterror] = useState(false);
  //console.log(degree);

  const weatherIconImg = {
    "01d": Clear,
    "01n": Clear,
    "02d": Cloud,
    "02n": Cloud,
    "03d": Drizzle,
    "03n": Drizzle,
    "04d": Cloud,
    "04n": Cloud,
    "09d": Rain,
    "09n": Rain,
    "010d": Rain,
    "010n": Rain,
    "13d": Snow,
    "13n": Snow,
  };

  const handlekey = (e) => {
    if (e.key == "Enter") {
      handleWhether();
      setstate("");
    }
  };

  const handleChange = (e) => {
    setstate(e.target.value);
  };

  const handleWhether = async () => {
    try {
      setloading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${Api_key}&units=Metric`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 404) {
        setloading(false);
        seterror(true);
        console.log("404 Error");
      }
      setloading(false);
      seterror(false);
      console.log(data);
      setdegree(Math.floor(data.main.temp));
      setstate(data.name);
      setcountary(data.sys.country);
      setlotitude(data.coord.lat);
      setLongtitude(data.coord.lon);
      sethumidity(data.main.humidity);
      setwindspeed(data.wind.speed);
      const weathercode = data.weather[0].icon;
      console.log(`weather Code : `, weathercode);
      setweatherIcon(weatherIconImg[weathercode] || Clear);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    handleWhether();
  }, []);

  return (
    <>
      <div className=" bg-slate-700 container ">
        <p className="text-center text-white p-7 text-3xl font-semibold uppercase hover:shadow-white">
          Weather APP
        </p>
        <div className=" content bg-slate-200 rounded-lg  ">
          <div className=" flex items-center bg-white rounded-lg m-5">
            <input
              type="text"
              placeholder="Search City..."
              className="p-3 w-[330px] rounded-lg outline-none text-lg "
              onKeyDown={handlekey}
              onChange={handleChange}
              value={state}
            />
            <IoSearch
              className="w-5 h-5 text-slate-500 cursor-pointer "
              onClick={handleWhether}
            />
          </div>
          <WhetherImg
            latitude={latitude}
            longtitude={Longtitude}
            degree={degree}
            state={state}
            countary={countary}
            humidity={humidity}
            windspeed={windspeed}
            loading={loading}
            Error={error}
            weatherIcon={weatherIcon}
          />
        </div>
      </div>
    </>
  );
}
