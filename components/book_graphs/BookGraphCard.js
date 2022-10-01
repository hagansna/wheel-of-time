import React from "react";
import BookGraph from "./BookGraph";

function BookGraphCard({ percentages, order, header }) {
  return (
    <div className="flex flex-col rounded-lg justify-center items-center shadow-lg border border-gray-200">
      <h1>{header}</h1>
      <BookGraph percentages={percentages} order={order}></BookGraph>
    </div>
  );
}

export default BookGraphCard;
