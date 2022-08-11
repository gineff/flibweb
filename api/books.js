import clientPromise from './mongodb';

export default async function books(req, res) {

  const client = await clientPromise
  const db = client.db("flibusta");
  //const Books = await db.collection("Books");
  //let data = data = await db.collection("Books").find(req.query).toArray();
  let data;
  if(req.method === "GET" && req.query) {
    data = await db.collection("Books").find().limit(1).toArray();
  }else if(req.method === "GET"){
     data = await db.collection("Books").find(req.query).toArray();
  }else if(req.method === "POST"){
    const arg = Array.isArray(req.body)? req.body : [req.body];
    data = await db.collection("Books").find(...arg).toArray();
    //data = await db.collection("Books").find(req.body).toArray();
  }
  await client.close();

  res.statusCode = 200;
  res.json(data);
}
