import React from "react";

function BookCard({ book }) {
  let releaseDateObj = new Date(book.release_date);
  let releaseDate = releaseDateObj.toDateString();
  return (
    <div className="flex flex-col justify-center overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md w-1/2 md:w-1/3 lg:w-1/4 max-h-screen m-2 min-w-fit">
      <img
        className="w-auto h-[75vh] min-w-fit"
        src={book.original_cover_url}
        alt={book.title}
      />
      <div className="px-6 py-4 flex flex-col items-center">
        <div className="font-bold text-xl mb-2">{book.title}</div>
        <p className="text-gray-700 text-base">Release Date: {releaseDate}</p>
        <p className="text-gray-700 text-base">
          {typeof book.author == "object"
            ? book.author.join(", ")
            : book.author}
        </p>
      </div>
    </div>
  );
}

export default BookCard;
