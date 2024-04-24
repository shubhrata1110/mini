import { Room } from "../models/RoomSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { User } from "../models/userSchema.js";

import { generateToken } from "../utils/jwtToken.js";
import cloudinary from "cloudinary";
export const postRoomStatus = catchAsyncErrors(async (req, res, next) => {
    const {roomName, roomCurrStatus } = req.body;
    if (!roomName || !roomCurrStatus) {
      return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
    await Room.create({ roomName, roomCurrStatus });
    res.status(200).json({
      success: true,
      message: "room Sent!",
    });
  });

  export const getAllStatus = catchAsyncErrors(async (req, res, next) => {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
       rooms,
    });
  });

  export const updateCurrRoomStatus = catchAsyncErrors(
    async (req, res, next) => {
      const { id } = req.params;
      let room = await Room.findById(id);
      if (!room) {
        return next(new ErrorHandler("room not found!", 404));
      }
      room = await Room.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      res.status(200).json({
        success: true,
        message: "room Status updated",
      });
    }
  );
  
  