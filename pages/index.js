import { getBooks } from "./api/books";
import Head from "next/head";
import Books from "../components/Books";
import doBookAggregation from "../lib/bookUtils";

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
      <Books books={books} />
    </>
  );
}

export async function getStaticProps() {
  let books = await getBooks();
  books.sort((a, b) => a.order - b.order);

  books = doBookAggregation(books);
  return {
    props: {
      books,
    },
  };
}
