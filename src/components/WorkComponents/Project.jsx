import React from "react";
import { Link } from 'react-router-dom'
function Project(props) {

    const styles = {
        backgroundImage: `url(${props.img})`
    }

    return (
        <div className={`work-container--project ${props.id}`}>
            <Link to={`/${props.id}`}>
                <div style={styles} className="work-container--project--img-hoverer">
                </div>
            </Link>
        </div>
    )
}

export default Project