// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import surrealSignIn from "../../../lib/db";

export default async function handler(req, res) {
  let books = await getBooks();
  console.log(books);
  res.status(200).json(books);
}

export async function getBooks() {
  const db = await surrealSignIn();
  return await db.select("books");
}
