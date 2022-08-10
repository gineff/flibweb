import clientPromise from './mongodb'

export default async function lists(req, res) {
  const client = await clientPromise
  const db = client.db("Lists");
  const data = await db.find({lib_id:1}).toArray();
  await client.close();
  res.statusCode = 200;
  res.json(data);
}
