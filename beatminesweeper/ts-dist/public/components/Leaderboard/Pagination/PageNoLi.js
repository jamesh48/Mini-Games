import React from "react";
const PageNoLi = (props) => {
    return (React.createElement("li", { key: props.pageIndex, className: props.currentPage + 1 === props.pageIndex
            ? `pageNoLi selected-page-li`
            : "pageNoLi", onClick: props.handleClick },
        React.createElement("a", null, props.pageIndex)));
};
export default PageNoLi;
//# sourceMappingURL=PageNoLi.js.map