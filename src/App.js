import React, { useState } from "react";
import "./App.css";
import Item from "./components/item";

const initList = [
  { name: "tomato", calories: 20 },
  { name: "rice", calories: 30 },
  { name: "candy", calories: 100 },
];
function App() {
  const [list, setlist] = useState(initList);

  function removeItemHandler(e) {
    console.dir(e.target.name);
    const filteredList = list.filter((v) => v.name !== e.target.name);
    setlist(filteredList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {list.map((v, k) => {
          return (
            <Item
              key={`${k}${v.name}${v.calories}`}
              item={v}
              onClick={removeItemHandler}
            ></Item>
          );
        })}
      </header>
    </div>
  );
}

export default App;
