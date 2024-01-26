import React from "react";
import './pagination.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";


type Props = {
  renderData:any;
  data:any
} 


const Pagination:React.FC<Props>  = ({ renderData, data}) =>  {


  const [currentPage, setcurrentPage] = React.useState(1);
  const [itemsPerPage, setitemsPerPage] = React.useState(5);

  const [pageNumberLimit, setpageNumberLimit] = React.useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = React.useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = React.useState(0);

  const handleClick = (event:any) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number:any) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={`${currentPage == number ? "pagination-active" : 'pagination-item' }`}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });




  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li className="inc" onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li className="decr" onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  return (
    <>
      {renderData(currentItems ? currentItems : '')}
     <div className="pagination-wrap">
     <ul className="pagination">
        <li>
          <button
           className="pagination-prevBtn"
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            <IoIosArrowRoundBack />
          </button>
        </li>
        {pageDecrementBtn ? pageDecrementBtn :''}
        {renderPageNumbers ? renderPageNumbers : ''}
        {pageIncrementBtn ? pageIncrementBtn : ''}

        <li>
          <button
          className="pagination-nextBtn"
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            <IoIosArrowRoundForward />
          </button>
        </li>
      </ul>     
     </div>
      


     
    
 
    </>
  );
}

export default Pagination;