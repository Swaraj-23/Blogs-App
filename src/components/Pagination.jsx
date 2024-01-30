import React, { useContext } from "react";
import { appContext } from "../context/appContext";

function Pagination() {
  const { page, handlePageChange, totalPage } = useContext(appContext);

  return (
    <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white dark:bg-slate-800 dark:text-white">
      <div className="flex justify-between w-11/12 max-w-[670px] py-2">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="rounded-md border-2 px-4 py-1"
            >
              Previous
            </button>
          )}

          {page < totalPage && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="rounded-md border-2 px-4 py-1"
            >
              Next
            </button>
          )}
        </div>

        <p className="text-sm font-bold">
          Page {page} of {totalPage}
        </p>
      </div>
    </div>
  );
}

export default Pagination;
