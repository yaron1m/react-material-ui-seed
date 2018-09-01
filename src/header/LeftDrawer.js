import React from "react";
import PropTypes from "prop-types";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import {withRouter} from "react-router-dom";

const styles = {
    list: {
        width: 250,
    }
};

function LeftDrawer(props) {
    return (
        <Drawer open={props.open} onClose={props.onClose}>
            <div
                tabIndex={0}
                role="button"
                onClick={props.onClose}
            >
                <div style={styles.list}>
                    <List>
                        <ListItem button onClick={() => props.history.push("/")}>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Homepage"/>
                        </ListItem>
                        <ListItem button onClick={() => props.history.push("/about")}>
                            <ListItemIcon>
                                <InfoIcon/>
                            </ListItemIcon>
                            <ListItemText primary="About"/>
                        </ListItem>
                    </List>
                </div>
            </div>
        </Drawer>
    )
}

LeftDrawer.propTypes = {
    history: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default withRouter(LeftDrawer);