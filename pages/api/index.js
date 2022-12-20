import dbConnect from "../../db/dbConnect";
import Surfspots from "../../db/Models/Surfspots";

export default async function handler(req, res) {
  await dbConnect();
  console.log(req);

  if (req.method === "GET") {
    const surfspots = await Surfspots.find();
    res.status(200).json(surfspots);
  }
}