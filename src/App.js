import React, { useState } from "react";
import "./App.css";
import item from "./components/item";
import Item from "./components/item";
import useList from "./hooks/useList";

const initList = [
  { name: "tomato", calories: 20 },
  { name: "rice", calories: 30 },
  { name: "candy", calories: 100 },
];
function App() {
  const items = useList(initList);
  const [editable, setEditable] = useState(false);

  function removeItemHandler(e) {
    items.removeItem(e.target.name);
  }

  function makeditableHandler() {
    setEditable(true);
  }

  function keyPressHandler(e, i) {
    if (e.key === "Enter") {
      setEditable(!editable);
      items.saveItem(i, e.target.value);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {items.list.map((v, k) => {
          return (
            <Item
              key={`${k}${v.name}${v.calories}`}
              item={v}
              onClick={removeItemHandler}
              editable={editable}
              onDoubleClick={makeditableHandler}
              onKeyPress={keyPressHandler}
              index={k}
            ></Item>
          );
        })}
      </header>
    </div>
  );
}

export default App;
