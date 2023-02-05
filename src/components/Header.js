import React from "react";
import "../stylesheets/Header.css";
import ProfilePic from "../Images/Rectangle 90.png";
import emailIcon from "../Images/Mail.png";
import linkedinIcon from "../Images/linkedin.png";

export default function Header() {
    return(
        <header>
            <div>
                <img src={ProfilePic}/>
            </div>
            <div className="bio">
                <div>
                <p className="name">Laura Smith</p>
                <p className="job-role">Frontend Developer</p>
                <p className="website">laurasmith.website</p>
                </div>
                <div className="buttons">
                    <button className="email-button">
                        <img src={emailIcon}/>
                        <span>Email</span>
                    </button>
                    <button className="linkedin-button">
                        <img src={linkedinIcon}/>
                        <span>LinkedIn</span>
                    </button>
                </div>
            </div>
        </header>
    )
}