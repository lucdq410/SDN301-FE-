import { use } from "i18next";
import React, { useEffect } from "react";

const Pagination = ({ currentPage, totalPage, onChangePage }) => {
  const [page, setPage] = React.useState(1);
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`join-item btn ${i === page ? "btn-active" : ""}`}
          onClick={(e) => {
            onChangePage(i);
          }}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return <div className="join">{renderButtons()}</div>;
};

export default Pagination;
