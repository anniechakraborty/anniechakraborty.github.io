import React from "react";
import "./../styles/Footer.css";

export default function Footer(){
    return (
        <div className="footer">
            <div className="about">
            If you like my work, please connect with me via email or LinkedIn. You can view my work further on GitHub, and on my blog.
            </div>
            <h2>Get in touch &#8594;</h2>
            <div className="contact">
                <a href="mailto:chakrabortyannie20@gmail.com" target="_blank" rel="noopener noreferrer">Email</a> 
                 / <a href={'https://www.linkedin.com/in/annie-chakraborty/'} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                 / <a href={'https://github.com/anniechakraborty'} target="_blank" rel="noopener noreferrer">GitHub</a> 
                 / <a href={'https://medium.com/@annie.chakraborty'} target="_blank" rel="noopener noreferrer">Blog</a>
                  / <a href={'https://www.instagram.com/tinybookishreviews/#'} target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="about my-3">
            Made with &#9829; | React and Flask
            </div>
        </div>
    )
}