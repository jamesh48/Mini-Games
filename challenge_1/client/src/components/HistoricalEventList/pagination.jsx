import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';


export default ({offsetCallback, numberOfPages}) => {
  const [page, setPage] = useState(1);

  const handlePageClick = (data) => {
    // const inboundPage = data.selected + 1;
    const offset = Math.ceil(data.selected * 10);
    // setPage(inboundPage);
    offsetCallback(offset)
  }

  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={numberOfPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={6}
      pageClassName={'pageNo'}
      pageLinkClassName={'page-no-a'}
      activeLinkClassName={'active-page-no-a'}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />)
}