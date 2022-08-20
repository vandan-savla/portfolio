import React from "react";
import "./Footer.css";
// import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      
      <div className="f-content">
        <span>vdsavla@gmail.com</span>
        <div className="f-icons">
          <Insta color="orange" size={"3rem"} />
          <Facebook color="orange" size={"3rem"} />
          <Gitub color="orange" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
