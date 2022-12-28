import dbConnect from "../../db/dbConnect";
import Surfspots from "../../db/Models/Surfspots";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const surfspots = await Surfspots.find();
      res.status(200).json(surfspots);
    } catch (error) {
      res.status(500).json({ antwort: error });
    }
  }

  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    try {
      const newSurfspot = await Surfspots.create(data);
      res.status(201).json(newSurfspot);
    } catch (error) {
      res.status(400).json({ antwort: error });
    }
  }
}
