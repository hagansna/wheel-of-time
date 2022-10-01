import React from "react";
import BookCard from "./BookCard";
import BookInfo from "./BookInfo";

function Books({ books }) {
  let percentages = getBooksPercentages(books);
  return (
    <div className="flex flex-col w-full snap-mandatory snap-y overflow-y-auto h-screen">
      {books.map((book) => {
        let justify_location =
          book.order % 2 === 0 ? "md:flex-row" : "md:flex-row";
        return (
          <div
            key={book.order}
            className="flex flex-col md:flex-row w-full items-center px-2 h-screen shrink-0 snap-start my-1"
          >
            <div
              className={`rounded-lg md:flex-row flex ${justify_location} justify-center items-center w-full shadow-lg border border-gray-200 max-h-screen mx-6 transition ease-in-out hover:shadow-2xl duration-300`}
            >
              <BookCard book={book} />
              <BookInfo book={book} percentages={percentages} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function getBooksPercentages(books) {
  let bookPercentages = {
    wordPercentages: [],
    chapterPercentages: [],
    pagePercentages: [],
  };
  books.forEach((b) => {
    bookPercentages.wordPercentages.push({
      order: b.order + 1,
      percent: b.wordPercent,
      count: b.word_count,
    });
    bookPercentages.chapterPercentages.push({
      order: b.order + 1,
      percent: b.chapterPercent,
      count: b.chapter_count,
    });
    bookPercentages.pagePercentages.push({
      order: b.order + 1,
      percent: b.pagePercent,
      count: b.page_count,
    });
  });
  return bookPercentages;
}

export default Books;
