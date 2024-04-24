import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const roomSchema = new mongoose.Schema({
  roomName: {
    type: String,
    required: [true, "roomName Is Required!"],
  },
  roomCurrStatus: {
    type: String,
    required: [true, "status Is Required!"],
    enum: ["vacant", "occupied"],
    default:"vacant",
  },
});
export const Room = mongoose.model("Room", roomSchema);
