import React from "react";
import PropTypes from 'prop-types';

export default function HomePage(props) {
    const title = props.name ? "Welcome " + props.name : "What is you name";

    return (
        <div style={{fontSize: 16}}>
            {title}
        </div>
    )
}

HomePage.propTypes = {
    name: PropTypes.string,
};