import { useState } from "react";

const countries = [
  "India",
  "Australia",
  "Brazil",
  "Canada",
  "China",
  "France",
  "Germany",
  "Japan",
  "Mexico",
  "Russia",
  "United Kingdom",
  "United States",
];

const gameTypeArr = [
  { id: 1, gameType: "STEAM", edition: ["Standard", "Deluxe"] },
  { id: 2, gameType: "PS4", edition: ["Ultimate"] },
  { id: 3, gameType: "PS5", edition: ["Standard", "Ultimate"] },
  { id: 4, gameType: "XBOX ONE", edition: ["Standard", "Deluxe"] },
  { id: 5, gameType: "XBOX SERIES", edition: ["Standard", "Ultimate"] },
  { id: 6, gameType: "EPIC", edition: ["Ultimate"] },
];

const Purchase = () => {
  const [selectedGameType, setSelectedGameType] = useState("STEAM");

  const gameTypeHandler = (e) => {
    setSelectedGameType(e.target.value);
  };

  const filteredEdition = gameTypeArr?.filter(
    (item) => item?.gameType === selectedGameType
  );

  console.log(selectedGameType, filteredEdition, "test");

  return (
    <div
      className="w-1/4  mx-auto relative p-12 bg-black right-0 left-0 text-white bg-opacity-80"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <form className="flex flex-col items-center mt-[25vh]">
        <select className="p-1 my-2 w-[30%] rounded-lg bg-slate-700">
          {countries?.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>
        <select
          className="p-1 my-2 w-[30%] rounded-lg bg-slate-700"
          value={selectedGameType}
          onChange={gameTypeHandler}
        >
          {gameTypeArr?.map((item) => (
            <option value={item?.gameType} key={item?.id}>
              {item?.gameType}
            </option>
          ))}
        </select>

        <select className="p-1 my-2 w-[30%] rounded-lg bg-slate-700">
          {filteredEdition &&
            filteredEdition[0]?.edition?.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
        </select>

        <button className="p-1 my-3 bg-sky-300 w-[30%] rounded-lg">
          <h1 className="text-black font-bold">PURCHASE</h1>
        </button>
      </form>
    </div>
  );
};

export default Purchase;
