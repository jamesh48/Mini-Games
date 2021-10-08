import React from "react";
import { HandleClickPageFunc } from "../leaderboard-types";
import PageNo from "./PageNoLi";

interface PageNoUlProps {
  pageOffset: number;
  noOfTopTimes: number;
  topTimesPerPage: number;
  currentPage: number;
  handleClick: HandleClickPageFunc
}

const PageNoUl: React.FC<PageNoUlProps> = (props) => {


  const renderPageNumbers = () => {
    if (props.noOfTopTimes) {
    return [...new Array(Math.ceil(props.noOfTopTimes / props.topTimesPerPage))]
      .map((_, index) => {
        return index + 1;
      })
      .map((pageIndex) => {
        return (
          <PageNo
            key={pageIndex}
            pageIndex={pageIndex}
            currentPage={props.currentPage}
            handleClick={props.handleClick}
          />
        );
      });
    } else {
      return []
    }
  };

  return (
    <ul id="page-numbers">
      {renderPageNumbers()}
    </ul>
  );
};

export default PageNoUl;
