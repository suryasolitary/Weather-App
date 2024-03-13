import React, { useState } from "react";

export default function App() {
  const [user, setuser] = useState({
    name: "srinivas",
    age: 24,
    gender: "male",
    marital: "Maried",
    countary: "india",
    bio: "Write something about yourself...",
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checked" ? e.target.checked : e.target.value;
    setuser({ ...user, [e.target.id]: value });
  };

  return (
    <div className=" max-w-2xl my-10  mx-5  min-w-xl  ">
      <table>
        <tbody className="tbody">
          <tr className="text-center text-lg">
            <td className="p-3 font-semibold ">Name</td>
            <td>{user.name}</td>
          </tr>
          <tr className="text-center text-lg">
            <td className="p-3 font-semibold ">Age</td>
            <td>{user.age}</td>
          </tr>
          <tr className="text-center text-lg">
            <td className="p-3 font-semibold ">Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr className="text-center text-lg">
            <td className="p-3 font-semibold ">Marital Status</td>
            <td>{user.marital}</td>
          </tr>
          <tr className="text-center text-lg">
            <td className="p-3 font-semibold ">Contary</td>
            <td>{user.countary}</td>
          </tr>
          <tr className="text-center text-lg ">
            <td className="p-3 font-semibold ">Bio</td>
            <td className="p-3">{user.bio}</td>
          </tr>
        </tbody>
      </table>
      <form className="flex flex-col gap-5 mt-5  ">
        <input
          type="text"
          placeholder="Enter your name..."
          name="name"
          id="name"
          className="outline-none p-3 border rounded-lg  text-lg"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Your Age..."
          name="age"
          id="age"
          className="outline-none p-3 border rounded-lg text-lg"
          value={user.age}
          onChange={handleChange}
        />
        <div className="flex gap-5">
          <label htmlFor="">
            <input
              type="radio"
              id="male"
              name="male"
              checked={user.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="female"
              id="female"
              checked={user.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <label htmlFor="marital" className="text-md ">
          <input
            type="checkbox"
            name="marital"
            id="marital"
            className=""
            onChange={handleChange}
          />
          isMaried
        </label>
        <div>
          <label htmlFor="countary">
            Select Contary :
            <select
              name="countary"
              id="countary"
              className="ml-5 w-40 h-10 outline-none border rounded-lg "
              onChange={handleChange}
            >
              <option value="india">India</option>
              <option value="uk">Uk</option>
              <option value="lodon">London</option>
            </select>
          </label>
        </div>
        <textarea
          name="bio"
          id="bio"
          cols="30"
          rows="5"
          className="outline-none border resize-none p-3 text-lg"
          placeholder="write some about..."
          value={user.bio}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
