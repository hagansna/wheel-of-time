import surrealSignIn from "../../../lib/db";

export default async function charactersHandler(req, res) {
  let db = await surrealSignIn();
  let characters = await db.query(
    "SELECT * FROM characters ORDER BY RAND() LIMIT 10;",
    {
      lm: 10,
    }
  );
  res.status(200).json(characters);
}
