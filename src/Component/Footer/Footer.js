import { useState } from "react";
import "./Footer.css";


function Footer() {
  return (
    <div className="footer ">
        <p>@ 2023 company</p>
        <div className="d-flex gap-30 padding-50">
            <p>About</p>
            <p>Terms of use</p>
            <p>Contact</p>
        </div>

    </div>
  );
}

export default Footer;
