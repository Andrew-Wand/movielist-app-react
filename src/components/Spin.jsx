import React from "react";
import WheelComponent from "react-wheel-of-prizes";
import "../styles/spin.css";

function Spin({ movieList }) {
  const movieNames = movieList.map((movie) => movie.name);
  const segments = movieNames;
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];

  const onFinished = (winner) => {
    console.log(winner);
  };

  return (
    <div className="wheel-container">
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={290}
        upDuration={100}
        downDuration={1000}
        fontFamily="Arial"
      />
    </div>
  );
}

export default Spin;
