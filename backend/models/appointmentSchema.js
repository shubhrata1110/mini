import mongoose from "mongoose";
import { Mongoose } from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Is Required!"],
    // minLength: [3, "First Name Must Contain At Least 3 Characters!"],
  },
  designation: {
    type: String,
    required: [true, "designation is required"],
    // minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
  },
  employeeCode: {
    type: String,
    //required: [true, "Email Is Required!"],
    //validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  address: {
    type: String,
    required: [true, "Address Is Required!"],
  },
  phone: {
    type: String,
    required: [true, "Phone Number is required"],
    minLength: [10, "Phone Number Must Contain Only 10 Digits!"],
    maxLength: [10, "Phone Number Must Contain Only 10 Digits!"],
  },
  guestName: {
    type: String,
    required: [true, " Guest Name Is Required!"],
    // minLength: [3, "First Name Must Contain At Least 3 Characters!"],
  },
  guestAddress: {
    type: String,
    required: [true, "Address Is Required!"],
  },
  guestEmail: {
    type: String,
    required: [true, " Guest Email Is Required!"],
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  relation:{
    type: String,
    required: [true, " Relation of the guest Is Required!"],
  },
  checkInDate: {
    type: Date,
    required: [true, "Check In Date Is Required!"],
  },
  checkOutDate: {
    type: Date,
    required: [true, "Check Out Date Is Required!"],
  },
  purpose:{
    type: String,
    required: [true, "purpose of stay is required"],
  },
  numOfRooms: {
    type: Number,
    required: [true, "Number of Rooms is requied"],
    
  },
  roomId:{
    type:String,
    enum: ["0","1","2","3"],
    default: "0",
  },
  // appointment_date: {
  //   type: String,
  //   required: [true, "Appointment Date Is Required!"],
  // },
  // department: {
  //   type: String,
  //   required: [true, "Department Name Is Required!"],
  // },
  // doctor: {
  //   firstName: {
  //     type: String,
  //     required: [true, "Doctor Name Is Required!"],
  //   },
  //   lastName: {
  //     type: String,
  //     required: [true, "Doctor Name Is Required!"],
  //   },
  // },
  // hasVisited: {
  //   type: Boolean,
  //   default: false,
  // },
  // address: {
  //   type: String,
  //   required: [true, "Address Is Required!"],
  // },
  // doctorId: {
  //   type: mongoose.Schema.ObjectId,
  //   required: [true, "Doctor Id Is Invalid!"],
  // },
  patientId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Patient Id Is Required!"],
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
