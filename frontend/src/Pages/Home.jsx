import React, { useContext } from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Biography from "../components/Biography";
// import MessageForm from "../components/MessageForm";
// /import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      
      <div className="headingg"></div>
      <center><h1>EDC GUEST HOUSE </h1>
      <h4>welcome to edc guest house room booking services!!</h4>
      <br />
      <p>looking for a place to stay inside of campus.<br/> Book a room now and get luxurious ,<br/>  clean and air conditioned rooms at affordable prices with meals!!!</p></center>
      <Gallery/>

      
    </>
  );
};

export default Home;
