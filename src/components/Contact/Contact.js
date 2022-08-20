import React, {useState,useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();
  const [done, setDone] = useState(false);
  const [val, setVal] = useState();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hhehbhd",
        "template_4a4wedq",
        form.current,
        "upBoq1FVK1rvTxOdI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setVal(()=> "") ;
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
        
          <span>Contact me</span>
          <div
            className="blur c-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" value = {val} className="user"  placeholder="Name"/>
          <input type="email" name="user_email" value = {val} className="user" placeholder="Email"/>
          <input type="text" name="user_sub" value = {val} className="user"  placeholder="Subject"/>
          <textarea name="message" value = {val} className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;