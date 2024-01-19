const MongoClient = require("mongodb")
const dotenv = require("dotenv")

dotenv.config();

const connection_string = process.env.MONGO_DB_URI || "";
const client = new MongoClient(connection_string);

let conn;

try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("feather");

export default db;
