import React from "react";
import "../stylesheets/Footer.css";
import Instagram from "../Images/Instagram Icon.png";
import Facebook from "../Images/Facebook Icon.png";
import Twitter from "../Images/Twitter Icon.png";
import Github from "../Images/GitHub Icon.png";


export default function Footer() {
    return(
        <footer className="footer">
            <img src={Instagram}/>
            <img src={Facebook}/>
            <img src={Twitter}/>
            <img src={Github}/>
        </footer>
    )
}