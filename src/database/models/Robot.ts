import { model, Schema } from "mongoose";

const robotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  imageURL: {
    type: String,
    required: true,
  },

  speed: {
    type: Number,
    required: true,
  },

  endurance: {
    type: Number,
    required: true,
  },

  creationDate: {
    type: String,
    required: true,
  },
});

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
