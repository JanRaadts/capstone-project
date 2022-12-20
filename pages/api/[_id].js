import dbConnect from "../../db/dbConnect";
import Surfspots from "../../db/Models/Surfspots";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "PUT") {
    const id = req.query._id;
    const updatedDocument = await Surfspots.findByIdAndUpdate(
      id,
      { comments: req.body.comments },
      { returnDocument: "after" }
    );

    if (updatedDocument) {
      res.status(200).json(updatedDocument);
    } else {
      res.status(404).json({ message: "document not found" });
    }
  }
}
