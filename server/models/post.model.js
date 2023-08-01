import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },
    picturePath: String,
    userPicturePath: String,
    film: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Film",
      require: true,
    },
    comments: {
      type: Array,
      default: [],
    },
    likes: {
      type: Map,
      of: Boolean,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },

  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
