import Surreal from "surrealdb.js";

const db = new Surreal(process.env.DATABASE_URL);
let signedIn = false;

export default async function surrealSignIn() {
  if (!signedIn) {
    try {
      await db.signin({
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
      });
      await db.use("wot", "wot");
    } catch {}
  }
  return db;
}
