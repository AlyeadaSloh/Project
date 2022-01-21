import React from "react";
import Card from "./Card";
import data from "../atlas-of-remote-islands.js";

function App() {
  console.log(data.islands[0].name);
  //turn into my own component
  return (
    <div>
      <div className="container">
        <h1 className="section-title"></h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-WKOpMVrX0T5rn2f_Y1tscBFKKNVZbrEgc7FJRONFNl2maTNSQkKa2Q2xqTgRaNImiU&usqp=CAU" />
      </div>

      <div className="container">
        <h2 className="section-title">Members</h2>
        <ul className="cards">
          {data.islands.map((island) => {
            return <Card island={island} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;
