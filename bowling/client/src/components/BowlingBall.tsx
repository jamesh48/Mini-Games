import React from "react";
import { CustomWindow } from "./bowlingTypes";

declare let window: CustomWindow;
const BowlingBall: React.FC<{ rolling: boolean }> = ({ rolling }) => {
  const styles = {
    holeOne: {
      left: "20px",
      bottom: "-25px"
      // boxShadow: 'inset .5px 1.4px 1px rgba(0, 0, 0,1)',
    },

    holeTwo: {
      left: "34px",
      bottom: "-10px"
    },

    holeThree: {
      left: "37px",
      bottom: "37px"
    },

    ballShadow: {
      bottom: "0px",
      boxShadow: "inset -25px -25px 40px rgba(0, 0, 0, .5)"
    }
  };
  const [holePositions, setHolePositions] = React.useState(styles);

  React.useEffect(() => {
    if (rolling === true) {
      window.rollingInterval = setInterval(() => {
        setHolePositions((eHP) => {
          let currentPosition = Number(eHP.ballShadow.bottom.split("px")[0]);
          currentPosition = currentPosition + 1;

          let currentShadow = Number(eHP.ballShadow.boxShadow.split("px")[1].trim());
          currentShadow = currentShadow - 1;

          let ballShadow = {
            ...eHP.ballShadow,
            ...{
              boxShadow: `inset -25px ${currentShadow + "px"} 40px rgba(0,0,0,.5)`,
              bottom: currentPosition + "px"
            }
          };
          let splitter = Number(eHP.holeOne.bottom.split("px")[0]);
          splitter = splitter + 1;

          let holeOne = { ...eHP.holeOne, ...{ bottom: splitter + "px" } };

          splitter = Number(eHP.holeTwo.bottom.split("px")[0]);
          splitter = splitter + 1;
          let holeTwo = { ...eHP.holeTwo, ...{ bottom: splitter + "px" } };

          splitter = Number(eHP.holeThree.bottom.split("px")[0]);
          splitter = splitter + 1;
          let holeThree = { ...eHP.holeThree, ...{ bottom: splitter + "px" } };
          if (holeOne.bottom === "42px") {
            ballShadow.boxShadow = `inset -25px 30px 40px rgba(0,0,0,.5)`;
          }
          if (holeOne.bottom === "45px") {
            holeOne.bottom = "-100px";
            holeTwo.bottom = "-85px";
            holeThree.bottom = "-38px";
          }

          let newHoles = { ...eHP, holeOne, holeTwo, holeThree, ballShadow };
          return newHoles;
        });
      }, 3);
    } else {
      clearInterval(window.rollingInterval);
      setHolePositions(styles);
    }
  }, [rolling]);

  return (
    <div
      id="ball-element"
      // onClick={() => {
      //   setRolling(true);
      // }}
    >
      <div id="bowling-ball" style={holePositions.ballShadow}>
        <p id="hole-one" style={holePositions.holeOne}></p>
        <p id="hole-two" style={holePositions.holeTwo}></p>
        <p id="hole-three" style={holePositions.holeThree}></p>
      </div>
    </div>
  );
};

export default BowlingBall;
