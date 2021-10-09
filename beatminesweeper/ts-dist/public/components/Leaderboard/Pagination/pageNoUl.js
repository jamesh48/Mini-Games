import React from "react";
import PageNo from "./PageNoLi";
const PageNoUl = (props) => {
    const renderPageNumbers = () => {
        if (props.noOfTopTimes) {
            return [...new Array(Math.ceil(props.noOfTopTimes / props.topTimesPerPage))]
                .map((_, index) => {
                return index + 1;
            })
                .map((pageIndex) => {
                return (React.createElement(PageNo, { key: pageIndex, pageIndex: pageIndex, currentPage: props.currentPage, handleClick: props.handleClick }));
            });
        }
        else {
            return [];
        }
    };
    return (React.createElement("ul", { id: "page-numbers" }, renderPageNumbers()));
};
export default PageNoUl;
//# sourceMappingURL=pageNoUl.js.map