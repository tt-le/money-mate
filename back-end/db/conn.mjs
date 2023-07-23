import { MongoClient } from "mongodb";
import path from 'path';
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = dotenv.config({path: path.resolve(__dirname, "../.env")}).parsed;

const connectionString = config.ATLAS_URI || "mongodb://localhost:27017";
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("Money-Mate");
// const users = await db.collection("User");
// // await Users.insertOne({ _id: "username", password: "hash" });
// const users = await Users.find({}).toArray();
// console.log("did we get users?");
// users.findOne({ _id: "username1" }).then((user)=>{
//   console.log("found");
//   console.log(user);
// }).catch((error)=>console.log(error))
// console.log(users);

export default db;