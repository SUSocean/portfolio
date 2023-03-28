import React from "react";

function About() {
    return (
        <div id="ABOUT" className="about-container">
            <div className="about-container--greetings">
                <p><span className="green-focus">HI!</span></p>
                <p>MY NAME IS <span className="green-focus">DENIS</span></p>
            </div>
            <div className="about-container--description">
                <p className="about-contaienr--description--me-headline">Me:</p>
                <p className="about-contaienr--description--me-description">
                    I’m a software engineer with a focus on <span className="green-focus">front-end.</span> I have a <span className="green-focus">passion</span> for <span className="green-focus">creating</span> visually <span className="green-focus">appealing</span> and intuitive <span className="green-focus">interfaces</span> that will provide <span className="green-focus">users</span> with an <span className="green-focus">engaging</span> experience.
                </p>
                <p className="about-container--description--tools-headline">My tools:</p>
                <div className="about-container--description--tools">
                    <i className="fa-brands fa-figma"></i>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-html5"></i>
                    <i className="fa-brands fa-css3-alt"></i>
                    <i className="fa-brands fa-js"></i>
                    <i className="fa-brands fa-react"></i>
                    <i className="fa-solid fa-gears"></i>
                    <img className="about-container--description--tools--nextjs" src="./public/images/next-js-icon.png" alt="nextJS logo" />
                </div>
            </div>
        </div>
    )
}

export default About