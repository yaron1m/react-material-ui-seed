import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

export default function HomePage(props) {
    const title = props.name ? "Welcome " + props.name + "!" : "Please enter your name:";

    return (
        <div style={{fontSize: 16}}>
            <div>
                {title}
            </div>
            <div style={{margin: 10}}>
                <TextField
                    value={props.name ? props.name : ""}
                    onChange={event => props.updateName(event.target.value)}
                    helperText="Your name"
                />
            </div>
        </div>
    )
}

HomePage.propTypes = {
    name: PropTypes.string,
    updateName: PropTypes.func.isRequired,
};