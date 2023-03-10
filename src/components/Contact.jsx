import React from "react"

function Contact() {
    return (
        <div id="CONTACT" className="contact-container">
            <h1 className="contact-container-headline">MY <span className="green-focus">CONTACTS:</span> </h1>
            <div className="contact-container--contact-info-wrapper">
                <a href='tel:0877957502' className="contact-container--contact-info-wrapper--tel">0 877-957-502</a>
                <a href="mailto:igonind.a1@gmail.com" className="contact-container--contact-info-wrapper--mail">igonind.a1@gmail.com</a>
            </div>
            <svg className="wave" viewBox="0 0 1499 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.0151756V100H1499L1487.5 0.0151756C1487.5 0.0151756 1417.92 25.0422 1334.55 25.2015C1250.2 25.3627 1262.4 -0.528875 1178.11 0.0151756C1097 0.538637 1114.32 25.2968 1033.16 25.2015C952.534 25.1069 970.8 0.363503 890.203 0.0151756C807.552 -0.342028 822.417 25.4617 739.753 25.2015C658.601 24.9461 675.95 -0.274443 594.802 0.0151756C515.269 0.299028 535.117 24.0715 455.848 25.2015C369.507 26.4324 377.937 -0.732927 291.403 0.0151756C209.385 0.724232 225.063 25.4635 142.952 25.2015C62.343 24.9444 0 0.0151756 0 0.0151756Z" fill="#261C15" />
            </svg>
            <svg className="wave2" viewBox="0 0 1499 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.0151756V100H1499L1487.5 0.0151756C1487.5 0.0151756 1417.92 25.0422 1334.55 25.2015C1250.2 25.3627 1262.4 -0.528875 1178.11 0.0151756C1097 0.538637 1114.32 25.2968 1033.16 25.2015C952.534 25.1069 970.8 0.363503 890.203 0.0151756C807.552 -0.342028 822.417 25.4617 739.753 25.2015C658.601 24.9461 675.95 -0.274443 594.802 0.0151756C515.269 0.299028 535.117 24.0715 455.848 25.2015C369.507 26.4324 377.937 -0.732927 291.403 0.0151756C209.385 0.724232 225.063 25.4635 142.952 25.2015C62.343 24.9444 0 0.0151756 0 0.0151756Z" fill="#63A088" />
            </svg>
        </div>
    )
}

export default Contact