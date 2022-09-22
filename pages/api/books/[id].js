import surrealSignIn from "../../../lib/db";

export default async function bookHandler(req, res) {
  const {
    query: { id },
    method,
  } = req;
  const db = await surrealSignIn();
  let book = await db.select(id);
  res.status(200).json(book);
}
