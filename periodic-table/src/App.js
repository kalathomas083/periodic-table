import React from "react";
import "./App.css";
import elementsData from "./data/elements.json";

const elementsList = elementsData.elements;

const elementsNames = elementsList.map(element => {
  for (var key in element) {
    if (element.hasOwnProperty(key)) {
      console.log(key + " -> " + element[key]);
    }
  }
});

const elementsKeys = Object.keys(elementsList[0]);
console.log(elementsKeys);

// console.log(display);

function App() {
  return <div>{elementsNames}</div>;
}

export default App;
