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
        <img src="https://static.wikia.nocookie.net/nickiminaj/images/1/16/Artworks-000217700613-wmidqp-t500x500_%281%29.jpg/revision/latest?cb=20210107151339" />
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
