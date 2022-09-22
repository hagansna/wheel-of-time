import { getBooks } from "./api/books";
import Head from "next/head";
import Image from "next/image";

export default function Home({ books }) {
  return (
    <>
      <div>
        <Head>
          <title>Wheel of Time Info</title>
          <meta
            name="description"
            content="A page with information about The Wheel of Time"
          />
        </Head>
      </div>
      <div className="flex flex-col w-full snap-mandatory snap-y overflow-y-auto h-screen">
        {books.map((book) => {
          if (book.order % 2 == 0) {
            return (
              <div
                key={book.order}
                className="flex flex-col md:flex-row w-full md:justify-start justify-center items-center px-2 h-screen shrink-0 snap-start"
              >
                <div className="rounded-lg md:flex-row flex md:justify-start justify-center items-center w-full shadow-lg border border-gray-200 max-h-screen mx-6 my-2 transition ease-in-out hover:shadow-2xl duration-300">
                  <div className="flex flex-col justify-center overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md w-1/2 md:w-1/3 lg:w-1/4 max-h-screen m-2 min-w-fit">
                    <img
                      className="w-auto h-[75vh] min-w-fit"
                      src={book.original_cover_url}
                      alt={book.title}
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{book.title}</div>
                      <p className="text-gray-700 text-base">{book.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={book.order}
                className="flex md:flex-row w-full md:justify-end justify-center items-center px-2 h-screen shrink-0 snap-start"
              >
                <div className="rounded-lg md:flex-row flex md:justify-end justify-center items-center w-full shadow-lg border border-gray-200 max-h-screen mx-6 my-2 transition ease-in-out hover:shadow-2xl duration-300">
                  <div className="flex flex-col justify-center overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md w-1/2 md:w-1/3 lg:w-1/4 max-h-screen m-2 min-w-fit">
                    <img
                      className="w-auto h-[75vh] min-w-fit"
                      src={book.original_cover_url}
                      alt={book.title}
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{book.title}</div>
                      <p className="text-gray-700 text-base">{book.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}

        {/* <div>
            key={book.order}
            style={{ backgroundImage: `url('${book.original_cover_url}')` }}
            className="w-full h-screen flex justify-center snap-start items-center shrink-0 bg-no-repeat bg-cover bg-center bg-opacity-0"
          >
            {book.title}
          </div> */}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const books = await getBooks();
  books.sort((a, b) => a.order - b.order);
  return {
    props: {
      books,
    },
  };
}
