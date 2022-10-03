// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import surrealSignIn from "../../../lib/db";

// export default async function handler(req, res) {
//   let books = await getBooks();
//   res.status(200).json(books);
// }

// export async function getBooks() {
//   const db = await surrealSignIn();
//   return await db.select("books");
// }

import prisma from "../../../lib/prisma";

export default async function assetHandler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const books = await getBooks();
        console.log("here", books);
        res.status(200).json(books);
      } catch (e) {
        console.error("Request error", e);
        res.status(500).json({ error: "Error fetching posts" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

export async function getBooks() {
  try {
    let books = await prisma.book.findMany();
    books = books.map((book) => {
      let dateString = new Date(book.release_date).toString();
      return { ...book, release_date: dateString };
    });
    return books;
  } catch (e) {
    console.error("Request error", e);
    throw e;
  }
}
