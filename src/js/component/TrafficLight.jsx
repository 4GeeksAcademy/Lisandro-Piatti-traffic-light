import React, { useState } from "react";

const TrafficLight = () => {
  const [selected, setSelected] = useState("red");

  const changeColor = (color) => {
    setSelected(color);
  };

  return (
    <div className="Viewport">
      <div className="start-light"></div>
      <div className="traffic-light">
        <div
          className={`red ${selected === "red" ? "light-on" : ""}`}
          onClick={() => changeColor("red")}
        ></div>
        <div
          className={`yellow ${selected === "yellow" ? "light-on" : ""}`}
          onClick={() => changeColor("yellow")}
        ></div>
        <div
          className={`green ${selected === "green" ? "light-on" : ""}`}
          onClick={() => changeColor("green")}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
