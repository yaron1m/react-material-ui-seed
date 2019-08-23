import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LeftDrawer from "./LeftDrawer";

const styles = {
    root: {
        flexGrow: 1,
        marginBottom: 20,
    },
    title: {
        textAlign: "left" as "left",
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

export default class Header extends React.Component {
    state = {
        drawerOpen: false,
    };

    changeDrawer = (open: boolean) => () => {
        this.setState({
            drawerOpen: open,
        })
    };

    render() {
        return (
            <div style={styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            style={styles.menuButton}
                            onClick={this.changeDrawer(true)}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography color="inherit" style={styles.title}>
                            My App
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>

                <LeftDrawer
                    open={this.state.drawerOpen}
                    onClose={this.changeDrawer(false)}
                />
            </div>
        );
    }
}
