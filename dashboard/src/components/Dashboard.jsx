import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
const Dashboard = () => {
  
  const [appointments, setAppointments] = useState([]);
 const [show, setShow] = useState(false);


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
  const navigateTo = useNavigate();
  const goToRoomPage=()=>{
    navigateTo("/rooms");
    setShow(!show);
  };

  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            {/* <img src="/doc.png" alt="docImg" /> */}
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
            {/* <button  onClick={goToRoomPage}>See Room Chart</button> */}
            <div className="links">
            <TiHome onClick={goToRoomPage} />see room Chart
            </div>
          </div>
          <div className="thirdBox">
            <p>send link to incharge</p>
            <h3>10</h3>
          </div>
        </div>
        
        <div className="banner">
          <h5>Bookings</h5>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>desig</th>
                <th>emp code</th>
                {/* <th>check in</th>
                <th>check out</th> */}
                <th>room</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {appointments && appointments.length > 0
                ? appointments.map((appointment) => (
                    <tr key={appointment._id}>
                      <td>{`${appointment.name}`}</td>
                      <td>{`${appointment.designation}`}</td>
                      <td>{`${appointment.employeeCode}`}</td>
                      {/* <td>{`${appointment.checkInDate}`}</td>
                      <td>{`${appointment.checkOutDate}`}</td> */}
                      
                      <td>
                        <select
                          
                          value={appointment.roomId}
                          onChange={(e) =>
                            handleUpdateRoomStatus(appointment._id, e.target.value)
                          }
                        >
                          <option value="1" >
                           1
                          </option>
                          <option value="2" >
                            2
                          </option>
                          <option value="3" >
                            3
                          </option>
                        </select>
                      </td>

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

          
        </div>
      </section>
    </>
  );
};

export default Dashboard;
