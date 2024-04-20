// import axios from "axios";
// import React, { useEffect } from "react";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const AppointmentForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [nic, setNic] = useState("");
//   const [dob, setDob] = useState("");
//   const [gender, setGender] = useState("");
//   const [appointmentDate, setAppointmentDate] = useState("");
//   const [department, setDepartment] = useState("Pediatrics");
//   const [doctorFirstName, setDoctorFirstName] = useState("");
//   const [doctorLastName, setDoctorLastName] = useState("");
//   const [address, setAddress] = useState("");
//   const [hasVisited, setHasVisited] = useState(false);

//   const departmentsArray = [
//     "Pediatrics",
//     "Orthopedics",
//     "Cardiology",
//     "Neurology",
//     "Oncology",
//     "Radiology",
//     "Physical Therapy",
//     "Dermatology",
//     "ENT",
//   ];

//   const [doctors, setDoctors] = useState([]);
//   useEffect(() => {
//     const fetchDoctors = async () => {
//       const { data } = await axios.get(
//         "http://localhost:4000/api/v1/user/doctors",
//         { withCredentials: true }
//       );
//       setDoctors(data.doctors);
//       console.log(data.doctors);
//     };
//     fetchDoctors();
//   }, []);
//   const handleAppointment = async (e) => {
//     e.preventDefault();
//     try {
//       const hasVisitedBool = Boolean(hasVisited);
//       const { data } = await axios.post(
//         "http://localhost:4000/api/v1/appointment/post",
//         {
//           firstName,
//           lastName,
//           email,
//           phone,
//           nic,
//           dob,
//           gender,
//           appointment_date: appointmentDate,
//           department,
//           doctor_firstName: doctorFirstName,
//           doctor_lastName: doctorLastName,
//           hasVisited: hasVisitedBool,
//           address,
//         },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       toast.success(data.message);
//       setFirstName(""),
//         setLastName(""),
//         setEmail(""),
//         setPhone(""),
//         setNic(""),
//         setDob(""),
//         setGender(""),
//         setAppointmentDate(""),
//         setDepartment(""),
//         setDoctorFirstName(""),
//         setDoctorLastName(""),
//         setHasVisited(""),
//         setAddress("");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <>
//       <div className="container form-component appointment-form">
//         <center><h2>Fill In Your Details</h2></center>
//         <form onSubmit={handleAppointment}>
//           <div>
//             <input
//               type="text"
//               placeholder="First Name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="number"
//               placeholder="Mobile Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <div>
//             <input
//               type="number"
//               placeholder="NIC"
//               value={nic}
//               onChange={(e) => setNic(e.target.value)}
//             />
//             <input
//               type="date"
//               placeholder="Date of Birth"
//               value={dob}
//               onChange={(e) => setDob(e.target.value)}
//             />
//           </div>
//           <div>
//             <select value={gender} onChange={(e) => setGender(e.target.value)}>
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//             <input
//               type="date"
//               placeholder="Appointment Date"
//               value={appointmentDate}
//               onChange={(e) => setAppointmentDate(e.target.value)}
//             />
//           </div>
//           <div>
//             <select
//               value={department}
//               onChange={(e) => {
//                 setDepartment(e.target.value);
//                 setDoctorFirstName("");
//                 setDoctorLastName("");
//               }}
//             >
//               {departmentsArray.map((depart, index) => {
//                 return (
//                   <option value={depart} key={index}>
//                     {depart}
//                   </option>
//                 );
//               })}
//             </select>
//             <select
//               value={`${doctorFirstName} ${doctorLastName}`}
//               onChange={(e) => {
//                 const [firstName, lastName] = e.target.value.split(" ");
//                 setDoctorFirstName(firstName);
//                 setDoctorLastName(lastName);
//               }}
//               disabled={!department}
//             >
//               <option value="">Select Doctor</option>
//               {doctors
//                 .filter((doctor) => doctor.doctorDepartment === department)
//                 .map((doctor, index) => (
//                   <option
//                     value={`${doctor.firstName} ${doctor.lastName}`}
//                     key={index}
//                   >
//                     {doctor.firstName} {doctor.lastName}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <textarea
//             rows="10"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             placeholder="Address"
//           />
//           <div
//             style={{
//               gap: "10px",
//               justifyContent: "flex-end",
//               flexDirection: "row",
//             }}
//           >
//             <p style={{ marginBottom: 0 }}>Have you visited before?</p>
//             <input
//               type="checkbox"
//               checked={hasVisited}
//               onChange={(e) => setHasVisited(e.target.checked)}
//               style={{ flex: "none", width: "25px" }}
//             />
//           </div>
//           <button style={{ margin: "0 auto" }}>GET APPOINTMENT</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AppointmentForm;
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
  
  
  const [hasVisited, setHasVisited] = useState(false);

  // const departmentsArray = [
  //   "Pediatrics",
  //   "Orthopedics",
  //   "Cardiology",
  //   "Neurology",
  //   "Oncology",
  //   "Radiology",
  //   "Physical Therapy",
  //   "Dermatology",
  //   "ENT",
  // ];
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
  // const [doctors, setDoctors] = useState([]);
  // useEffect(() => {
  //   const fetchDoctors = async () => {
  //     const { data } = await axios.get(
  //       "http://localhost:4000/api/v1/user/doctors",
  //       { withCredentials: true }
  //     );
  //     setDoctors(data.doctors);
  //     console.log(data.doctors);
  //   };
  //   fetchDoctors();
  // }, []);
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
          
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
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
            <p style={{ marginBottom: 0 }}>Have you visited before?</p>
            <input
              type="checkbox"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
              style={{ flex: "none", width: "25px" }}
            />
          </div>
          <button style={{ margin: "0 auto" }}>SEND BOOKING REQUST</button>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
