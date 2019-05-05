import React from "react";
import "./App.css";
import elementsData from "./data/elements.json";

const elementsList = elementsData.elements;
const elementNames = elementsList.map(element => <h1 key={element.number}>{element.symbol}</h1>);

// const elementBlock = ;

const elementsKeys = Object.keys(elementsList[0]);

console.log(elementsKeys);

function App() {
  return <div>{elementNames}</div>;
}

export default App;
