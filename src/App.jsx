import MountainCard from "./components/MoutainCard";
import data from "./data/challenge.json";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const [categoryjson, setCategoryjson] = useState("");
  const handleClick = (toto) => {
    setCategoryjson(toto);
  };

  return (
    <>
      <h1>SnapShot</h1>
      <input type="text" value={search} onChange={handleSearch} />
      <div className="buttonBox">
        <button onClick={() => handleClick("Mountain")}>Mountain</button>
        <button onClick={() => handleClick("Beach")}>Beach</button>
        <button onClick={() => handleClick("Bird")}>Bird</button>
        <button onClick={() => handleClick("Food")}>Food</button>
      </div>
      <MountainCard
        data={data}
        id={data.id}
        name={data.name}
        categoryjson={categoryjson}
        picture={data.picture}
        search={search}
        category={data.category}
      />
    </>
  );
};

export default App;
