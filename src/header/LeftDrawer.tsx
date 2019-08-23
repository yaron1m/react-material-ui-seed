import React from "react";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import {redirect} from "../util/HistoryUtil";

const styles = {
    list: {
        width: 250,
    }
};

function LeftDrawer(props: LeftDrawerProps) {
    return (
        <Drawer open={props.open} onClose={props.onClose}>
            <div
                tabIndex={0}
                role="button"
                onClick={props.onClose}
            >
                <div style={styles.list}>
                    <List>
                        <ListItem button onClick={() => redirect("/")}>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Homepage"/>
                        </ListItem>
                        <ListItem button onClick={() => redirect("/about")}>
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

interface LeftDrawerProps {
    open: boolean;
    onClose: () => void;
}

export default LeftDrawer;