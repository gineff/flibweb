import clientPromise from './mongodb'

export default async function lists(req, res) {

  const client = await clientPromise
  const db = client.db("flibusta");
  const data = await db.collection("Lists").find(req.query).toArray();
  console.log(data);
  await client.close();
  res.statusCode = 200;
  res.json(data);
}
