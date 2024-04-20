import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleUpdateRoomStatus = async (appointmentId, roomId) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { roomId },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, roomId }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const { isAuthenticated, admin } = useContext(Context);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <img src="/doc.png" alt="docImg" />
            <div className="content">
              <div>
                <p>Hello ,</p>
                <h5>
                  {admin &&
                    `${admin.firstName} ${admin.lastName}`}{" "}
                </h5>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, nam molestias. Eaque molestiae ipsam commodi neque.
                Assumenda repellendus necessitatibus itaque.
              </p>
            </div>
          </div>
          <div className="secondBox">
            <button >See Room Chart</button>
          </div>
          <div className="thirdBox">
            <p>Registered Doctors</p>
            <h3>10</h3>
          </div>
        </div>
        
        <div className="banner">
          <h5>Appointments</h5>
          <table>
            <thead>
              <tr>
                {/* <th>Patient</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Visited</th> */}
                {/* "_id": "662227f7d3dbd1427d841529",
            "name": "Shubhrata Goindi",
            "designation": "proff",
            "employeeCode": "1233",
            "address": "666, sector10, Ambala City",
            "phone": "8307491169",
            "guestName": "rohit",
            "guestAddress": "666,sector10",
            "guestEmail": "rohitratan43@gmail.com",
            "relation": "c",
            "checkInDate": "2024-04-20T00:00:00.000Z",
            "checkOutDate": "2024-04-29T00:00:00.000Z",
            "purpose": "Personal",
            "numOfRooms": 1,
            "patientId": "662188fc27430a37757fccfc",
            "status": "Pending",
            "__v": 0 */}
              </tr>
            </thead>
            <tbody>
              {appointments && appointments.length > 0
                ? appointments.map((appointment) => (
                    <tr key={appointment._id}>
                      <td>{`${appointment.name}`}</td>
                      <td>{`${appointment.designation}`}</td>
                      <td>{`${appointment.employeeCode}`}</td>
                      {/* <td>{`${appointment.roomId}`}</td>
                     



                      <select value={relation} onChange={(e) => setRelation(e.target.value)}>
              <option value="">Select Relation of the Guestr</option>
      
              <option value="a">(A) Institue Guest</option>
              <option value="b">(B) Departmental Guest</option>
              <option value="c">(C) Close Relatives of Faculty/Staff</option>
              <option value="d">(D) Others</option>

            </select> */}

                      <td>
                        <select value={appointment.roomId} >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          
                          value={appointment.roomId}
                          onChange={(e) =>
                            handleUpdateRoomStatus(appointment._id, e.target.value)
                          }
                        </select>
                         
                      </td>


















                      {/* <td><input type="text" /></td> */}
                      {/* <td>{appointment.appointment_date.substring(0, 16)}</td>
                      <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                      <td>{appointment.department}</td> */}
                      <td>
                        <select
                          className={
                            appointment.status === "Pending"
                              ? "value-pending"
                              : appointment.status === "Accepted"
                              ? "value-accepted"
                              : "value-rejected"
                          }
                          value={appointment.status}
                          onChange={(e) =>
                            handleUpdateStatus(appointment._id, e.target.value)
                          }
                        >
                          <option value="Pending" className="value-pending">
                            Pending
                          </option>
                          <option value="Accepted" className="value-accepted">
                            Accepted
                          </option>
                          <option value="Rejected" className="value-rejected">
                            Rejected
                          </option>
                        </select>
                      </td>
                      <td>{appointment.hasVisited === true ? <GoCheckCircleFill className="green"/> : <AiFillCloseCircle className="red"/>}</td>
                    </tr>
                  ))
                : "No Appointments Found!"}
            </tbody>
          </table>

          {}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
