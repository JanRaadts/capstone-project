import mongoose from "mongoose";

const { Schema } = mongoose;

const surfspotsSchema = new Schema({
  ID: { type: String, required: true },
  slug: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: String, required: true },
  street: { type: String, required: true },
  coordinates: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  description: { type: String, required: true },
  winddirection: { type: String, required: true },
  surfcenter: { type: String, required: true },
  parking: { type: String, required: true },
  camping: { type: String, required: true },
});

const Surfspots =
  mongoose.models.Surfspots || mongoose.model("Surfspots", surfspotsSchema);

export default Surfspots;
