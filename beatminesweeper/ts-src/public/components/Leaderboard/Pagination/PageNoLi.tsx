import React from "react";
import { HandleClickPageFunc } from "../leaderboard-types";

interface PageNoLiProps {
  pageIndex: number;
  currentPage: number;
  handleClick: HandleClickPageFunc;
}
const PageNoLi: React.FC<PageNoLiProps> = (props) => {
  return (
    <li
      key={props.pageIndex}
      className={
        props.currentPage + 1 === props.pageIndex
          ? `pageNoLi selected-page-li`
          : "pageNoLi"
      }
      onClick={props.handleClick}
    >
      <a>{props.pageIndex}</a>
    </li>
  );
};

export default PageNoLi;
