import React, { useState } from "react";

const TrafficLight = () => {
  const [selected, setSelected] = useState("red");
  const [purpleVisible, setPurpleVisible] = useState(false);
  const [textButton, setTextButton] = useState("Purple Light");

  const changeColor = (color) => {
    setSelected(color);
  };

  const randomLight = () => {
    setPurpleVisible(false);
    let randomChoice = Math.floor(Math.random() * 3);
    console.log(randomChoice);
    if (randomChoice === 0) {
      setSelected("red");
    }
    if (randomChoice === 1) {
      setSelected("yellow");
    }
    if (randomChoice === 2) {
      setSelected("green");
    }
  };

  const changePurple = () => {
    if (purpleVisible) {
      console.log(`pero en el if es ${purpleVisible}`);
      setTextButton("Purple Light");
      return setPurpleVisible(false);
    }
    setPurpleVisible(true);
    console.log(`ahora es ${purpleVisible}`);
    setTextButton("Turn Off Purple Light");
    setSelected("");
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
        <div className={`${purpleVisible ? "visibility light-on" : ""}`}></div>
      </div>
      <div className="button-modifiers">
        <button
          className="btn btn-primary"
          onClick={() => randomLight()}
        >
          Random Light
        </button>
        <button
          className="btn btn-primary"
          onClick={() => changePurple()}
        >
          {textButton}
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
