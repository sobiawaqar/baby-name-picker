import React from "react";
import names from "./babyNamesData.json";
import { useState } from "react";
import "./App.css";
import DisplayNames from "./DisplayNames";

function filterNames(inputName) {
  return names.filter((babyName) => {
    return (
     babyName.name.toLowerCase().includes(inputName.toLowerCase()) 
    );
  });
}

function App() {
  const [arrayOfNames, setArrayOfNames] = useState(names);
  return (
    <div className="App">
      <h1>Baby Names Picker</h1>
      <form className="nosubmit">
        <input
          type="text"
          placeholder="Please enter your search here"
          className="nosubmit"
          onChange={(e) => {
            setArrayOfNames(filterNames(e.target.value));
          }}
        ></input>
      </form>
      <div className="App-body">
        <DisplayNames names ={arrayOfNames} />
      </div>
    </div>
  );
}

export default App;