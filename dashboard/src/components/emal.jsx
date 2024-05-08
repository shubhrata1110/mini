import axios from "axios";
import React, { useContext, useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import "./roomstyle.css";

import emailjs from '@emailjs/browser';

const Emal=()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_jk0pi0m', 'template_220prsn', form.current, {
            publicKey: '9b6H3t2IUKK98LRTC',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
return(
    <form ref={form} onSubmit={sendEmail}>
    
      <input type="submit" value="Send" />
    </form>
  );
};


export default Emal;