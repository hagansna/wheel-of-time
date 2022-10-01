import React from "react";
import BookGraphs from "./book_graphs/BookGraphs";

function BookInfo({ book, percentages }) {
  return (
    <div className="md:flex flex-col hidden flex-grow self-stretch my-2">
      <div className="whitespace-pre-wrap px-4 hidden text-sm md:flex lg:text-base italic flex-grow items-center">
        {book.blurb}
      </div>
      <div className="xl:flex hidden justify-between">
        <BookGraphs percentages={percentages} order={book.order + 1} />
      </div>
    </div>
  );
}

export default BookInfo;
