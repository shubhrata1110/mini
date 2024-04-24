import express from "express";
import {
    getAllStatus,
  postRoomStatus,
  updateCurrRoomStatus
} from "../controller/roomStatusController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/send", postRoomStatus);
router.get("/getall", isAdminAuthenticated, getAllStatus);
router.put("/update/:id",isAdminAuthenticated,updateCurrRoomStatus)

export default router;
