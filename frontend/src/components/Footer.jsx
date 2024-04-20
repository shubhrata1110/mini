import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Book a Room</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/about"}>Contact Us</Link>
            </ul>
          </div>
          
          <div>
            <h4>Address</h4>
            <div>
              <p>located in:<a href="https://www.google.com/search?sca_esv=f99155e75c23de43&sxsrf=ACQVn0_9U8LzUXH6YSPWVaYo01lUimEU8w:1713426532111&q=Motilal+Nehru+National+Institute+of+Technology,+Allahabad&ludocid=7390650177677246811&lsig=AB86z5XFv3CWeT8tSLoJPET22cB1&sa=X&ved=2ahUKEwi77K2eo8uFAxWsSGwGHZl7D1wQ8G0oAHoECDwQAQ&biw=1536&bih=695&dpr=1.25">Motilal Nehru National Institute of Technology</a></p>
            </div>
            <div>
              <p>Diections:<a href="https://www.google.com/maps/dir//FVQ9%2BWXR,+MNNIT+Allahabad+Campus,+Teliarganj,+Prayagraj,+Uttar+Pradesh+211004/@25.4898319,81.7874904,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399ab58130ad1323:0x657d61aa7f2d1a63!2m2!1d81.8698919!2d25.4898549?entry=ttu">location</a></p>
            </div>
          </div>
          
          {/* <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>999-999-9999</span>
            </div>
            <div>
              <MdEmail />
              <span>zeelab@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Karachi, Pakistan</span>
            </div>
  </div>*/}
        </div> 
      </footer>
    </>
  );
};

export default Footer;
