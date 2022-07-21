import "./styles.css";
import { useState } from "react";

export default function App() {
  const [array, setArray] = useState([
    "Python",
    "Javascript",
    "React",
    "C#",
    "Angular",
    "Vue",
    "SQL",
    "Mongo DB",
    "C++"
  ]);
  const [search, setSearch] = useState("");

  const filteredArray = array.filter((val) => {
    if (val.toLowerCase().includes(search.toLowerCase())) {
      return array;
    }
  });

  return (
    <div className="App">
      <div className="searchDiv">
        <input
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
        />
      </div>

      {filteredArray.map((item, i) => {
        return (
          <div id="items" key={i}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
