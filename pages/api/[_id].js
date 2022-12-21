import dbConnect from "../../db/dbConnect";
import Surfspots from "../../db/Models/Surfspots";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "PUT") {
    const id = req.query._id;

    try {
      const updatedDocument = await Surfspots.findByIdAndUpdate(
        id,
        { comments: req.body.comments },
        { returnDocument: "after" }
      );
      res.status(200).json(updatedDocument);
    } catch (error) {
      res.status(500).json({ antwort: error });
    }
  }
}
