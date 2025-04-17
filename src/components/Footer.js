import React from "react";
import "./../styles/Footer.css";

export default function Footer(){
    return (
        <div className="footer">
            <div className="about">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. */}
            </div>
            <h2>Get in touch &#8594;</h2>
            <div className="contact">
                <a href="mailto:chakrabortyannie20@gmail.com" target="_blank">Email</a> / <a href={'https://www.linkedin.com/in/annie-chakraborty/'} target="_blank">LinkedIn</a> / <a href={'https://github.com/anniechakraborty'} target="_blank">GitHub</a> / <a href={'https://medium.com/@annie.chakraborty'} target="_blank">Blog</a> / <a href={'https://www.instagram.com/tinybookishreviews/#'} target="_blank">Instagram</a>
            </div>
        </div>
    )
}