import React from "react";

export default (props) => {
    const title = props.name ? "Welcome " + props.name : "What is you name";

    return (
        <div>
            {title}
        </div>
    )
}