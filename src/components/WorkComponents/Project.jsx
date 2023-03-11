import React from "react";

function Project(props) {

    const styles = {
        backgroundImage: `url(${props.imageUrl})`
    }

    return (
        <div className="work-container--project"></div>
    )
}

export default Project