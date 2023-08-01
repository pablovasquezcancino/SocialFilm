import mongoose from "mongoose";

const filmSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    cast: {
      type: Array,
      default: [],
    },
    genre: {
      type: String,
      required: true,
    },
    picture: String,
  },
  { timestamps: true }
);

export default mongoose.model("Film", filmSchema);
