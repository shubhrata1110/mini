import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import "./roomstyle.css";
import { GoContainer } from "react-icons/go";








const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/room/getall",
          { withCredentials: true }
        );
        setRooms(data.rooms);
        console.log(rooms);
      } catch (error) {
     
        setRooms([]);
      }
    };
    fetchRooms();
  }, []);


  const handleUpdateCurrRoomStatus = async (roomId, roomCurrStatus) => {
    
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/room/update/${roomId}`,
        { roomCurrStatus},
        { withCredentials: true }
      );
      setRooms((prev) =>
      prev.map((room) =>
          room._id === roomId
            ? { ...room, roomCurrStatus }
            : room
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
 
  return(
    <div>
      <center><h2 >ROOM VACANCY CHART</h2></center>
    <table >
    <thead>
      <tr>
        <th>Floor</th>
        <th>ROOM NAME</th>
        <th>ROOM STATUS</th>
        <th>CHECKOUT DATE</th>
        
      </tr>
    </thead>
    <tbody>
     
      {rooms && rooms.length > 0
        ? rooms.map((r) => (
          
            <tr>
              <td>{`${r.floor}`}</td>
              <td>{`${r.roomName}`}</td>
              <td> <select
                          className={
                            r.roomCurrStatus === "vacant"
                              ? "value-vacant"
                              : "value-occupied"
                          }
                          value={r.roomCurrStatus}
                          onChange={(e) =>
                            handleUpdateCurrRoomStatus(r._id, e.target.value)
                          }
                        >
                          <option value="vacant" className="value-vacant">
                           vacant
                          </option>
                         
                          <option value="occupied" className="value-occupied">
                            occupied
                          </option>
                        </select>
                      </td>
                      <td> <input type="date"></input>
                          
                         
                      </td>
          
             </tr> 
             
          ))
        : "No Appointments Found!"}
    </tbody>
  </table>

</div>



//     <table>
//       <tbody>
//         {rooms && rooms.length > 0
//                 ? rooms.map((room) => ( 
//                     <tr key={room._id}>
//                       <td>{`${room.roomName}`}</td>
//                       <td>{`${room.roomCurrStatus}`}</td>
//                       <td>
//         <select  value={room.roomId}onChange={(e) =>
//                             handleUpdateCurrRoomStatus(room._id, e.target.value)}>
//           <option value="vacant">vacant</option>
//           <option value="occupied">occupied</option>
//         </select>
//       </td>
//                       </tr>
//                  ))

//                 : "No room found!"
// }


//       </tbody>
//     </table>
              )
             
            };
            
            export default Rooms;
            
      {/* <tr>
        <td>Room 1</td>
        <td>Room 2</td>
        <td>Room 3</td>
        <td>Room 4</td>
        <td>Room 5</td>
        
      </tr>
       <tr>
      <td>
        <select  value={room.roomId}onChange={(e) =>
                            handleUpdateRoomStatus(appointment._id, e.target.value)}>
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td>
      <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td>
      <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td> <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td> <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td>
      </tr> */}
      {/* <tr>
        <td>Room 6</td>
        <td>Room 7</td>
        <td>Room 8</td>
        <td>Room 9</td>
        <td>Room 10</td>

      </tr>
      <tr>
      <td>
        <select className="value-accepted">room1
          <option value="vacant" >vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td>
      <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td>
      <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td> <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td> <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td>
      </tr>
      <tr>
        <td>Room 11</td>
        <td>Room 12</td>
        <td>Room 13</td>
        <td>Room 14</td>
        <td>Room 15</td>

      </tr>
      <tr>
      <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td>
      <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td>
      <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td> <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td> <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td>
      </tr>
      <tr>
        <td>Room 16</td>
        <td>Room 17</td>
        <td>Room 18</td>
        <td>Room 19</td>
        <td>Room 20</td>

      </tr>
      <tr>
      <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td>
      <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td>
      <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td> <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td> <td>
        <select name="" id="" value="1">room1
          <option value="vacant">vacant</option>
          <option value="occupied">occupied</option>
        </select>
      </td>
      </tr> */}
 