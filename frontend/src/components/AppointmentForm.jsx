import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";


const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestAddress, setGuestAddress] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [relation, setRelation] = useState("");
  const [checkInDate, setInDate] = useState("");
  const [checkOutDate, setOutDate] = useState("");
  const [numOfRooms, setNumOfRooms] = useState("");
  const [purpose, setPurposeOfStay] = useState("");
  
  const [aadharfile, setAadharFile] = useState("");


  const relationArray = [
    "(A) Institue Guest",
    "(B) Departmental Guest",
    "(C) Close Relatives of Faculty/Staff",
    "(D) Others",
  ];
  const purposeArray = [
    "Personal",
    "Official",
   
  ];

  
  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          name,
          designation,
          employeeCode, 
          address,
          phone,
          guestName,
          guestAddress,
          guestEmail,
          guestPhone,
          relation, 
          checkInDate,
          checkOutDate,
          numOfRooms, 
          purpose,
          aadharfile,
        },
        {
          withCredentials: true,
          
          headers: { "Content-Type": "multipart/data" },
        }
      );
      toast.success(data.message);
      setName(""),
      setDesignation(""),
      setEmployeeCode(""),
      setAddress(""),
      setPhone(""),
      setGuestName(""),
      setGuestAddress(""),
      setGuestEmail(""),
      setGuestPhone(""),
      setRelation(""),
      setInDate(""),
      setOutDate(""),
      setNumOfRooms(""),
      setPurposeOfStay("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container form-component appointment-form">
        <center><h2>Fill In Your Details</h2></center>
        <form onSubmit={handleAppointment}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Designation & Dept."
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Employee Code"
              value={employeeCode}
              onChange={(e) => setEmployeeCode(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Guest Name"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
            />
          </div>
          <div>
          <input
              type="text"
              placeholder="Guest Address"
              value={guestAddress}
              onChange={(e) => setGuestAddress(e.target.value)}
            />
           <input
              type="email"
              placeholder="Guest Email"
              value={guestEmail}
              onChange={(e) => setGuestEmail(e.target.value)}
            />
          </div>
          <div>
          <input
              type="tel"
              placeholder="guest Phone"
              value={guestPhone}
              onChange={(e) => setGuestPhone(e.target.value)}
            />
             <select value={relation} onChange={(e) => setRelation(e.target.value)}>
              <option value="">Select Relation of the Guestr</option>
      
              <option value="a">(A) Institue Guest</option>
              <option value="b">(B) Departmental Guest</option>
              <option value="c">(C) Close Relatives of Faculty/Staff</option>
              <option value="d">(D) Others</option>

            </select>
          </div>
          <div>
          <input
              type="date"
              placeholder="Check In Date"
              value={checkInDate}
              onChange={(e) => setInDate(e.target.value)}
            />
            <input
              type="date"
              placeholder="Check Out Date"
              value={checkOutDate}
              onChange={(e) => setOutDate(e.target.value)}
            />
          </div>
          <div>
            <select value={purpose} onChange={(e) => setPurposeOfStay(e.target.value)}>
              <option value="">Select Purpose of Stay</option>
              <option value="Official">Official</option>
              <option value="Personal">Personal</option>
            </select>
            <input
              type="number"
              placeholder="No. of Rooms"
              value={numOfRooms}
              onChange={(e) => setNumOfRooms(e.target.value)}
            />
          </div>
         
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
           <div>
           <input type="file"  onChange={handleAvatar}/></div>
            
          </div>
          <button style={{ margin: "0 auto" }}>SEND BOOKING REQUST</button>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
