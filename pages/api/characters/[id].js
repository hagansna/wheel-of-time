import surrealSignIn from "../../../lib/db";

export default async function characterHandler(req, res) {
  const {
    query: { id },
    method,
  } = req;
  const db = await surrealSignIn();
  let character = await db.select(id);
  res.status(200).json(character);
}
