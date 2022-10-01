import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";
import BookGraphCard from "./BookGraphCard";

function BookGraphs({ percentages, order }) {
  return (
    <div className="flex flex-row flex-grow justify-between mx-4">
      <BookGraphCard
        percentages={percentages.wordPercentages}
        order={order}
        header={"Word Count Percent"}
      />
      <BookGraphCard
        percentages={percentages.pagePercentages}
        order={order}
        header={"Page Count Percent"}
      />
      <BookGraphCard
        percentages={percentages.chapterPercentages}
        order={order}
        header={"Chapter Count Percent"}
      />
    </div>
  );
}

export default BookGraphs;
