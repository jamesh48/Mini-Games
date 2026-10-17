import React from "react";

const Pins: React.FC<{
  pinMap: boolean[][];
  sweeping: boolean;
  sweepBarPosition: number;
  pinsClientHeight: React.RefObject<HTMLDivElement>;
}> = ({ pinMap, sweeping, sweepBarPosition, pinsClientHeight }) => {
  return (
    <div
      style={{ bottom: `${sweepBarPosition}px` }}
      ref={pinsClientHeight}
      id="pin-container"
    >
      {pinMap.reduce((total: [], row: [], index: number) => {
        return [
          ...total,
          <div className="pin-row" id={"row-" + index} key={index}>
            {row.map((_: any, pinDex: number) => {
              return !pinMap[index][pinDex] ? (
                <span className="pin" key={pinDex}>
                  <p></p>
                </span>
              ) : (
                <span className="pin pin-down" key={pinDex}>
                  <p>X</p>
                </span>
              );
            })}
          </div>
        ];
      }, [])}
      {sweeping ? <div id="sweep-bar"></div> : null}
    </div>
  );
};

export default Pins;
