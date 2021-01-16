import React from "react";

import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import routes from "./routes";

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
        height: "100%",
        backgroundColor: "#622A55",
        color: "#fff",
    },
    nested: {
        paddingLeft: theme.spacing(2),
    },
}));

const NavBurger = ({ onChosen }) => {
    const classes = useStyles();
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleNavigate = href => {
        router.push(href);
        onChosen();
    };

    return (
        <div className={classes.list}>
            <List
                component="nav"
                aria-labelledby="list-header"
                subheader={
                    <ListSubheader
                        component="div"
                        id="list-subheader"
                        style={{ marginTop: 15 }}
                    >
                        <Typography variant="h4" style={{ color: "#fff" }}>
                            CSSEC
                        </Typography>
                    </ListSubheader>
                }
            >
                {routes.map(link => {
                    return (
                        <React.Fragment key={link.page}>
                            {!link.submenu ? (
                                <ListItem
                                    button
                                    key={link.page}
                                    onClick={() => handleNavigate(link.href)}
                                >
                                    <ListItemText
                                        primary={
                                            <Typography variant="h6">
                                                {link.page}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            ) : (
                                <>
                                    <ListItem
                                        button
                                        onClick={handleClick}
                                        key={link.page}
                                    >
                                        <ListItemText
                                            primary={
                                                <Typography variant="h6">
                                                    {link.page}
                                                </Typography>
                                            }
                                        />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                    <Collapse
                                        in={open}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <List component="div" disablePadding>
                                            {link.submenu.map(linkSub => {
                                                return (
                                                    <ListItem
                                                        button
                                                        className={
                                                            classes.nested
                                                        }
                                                        key={linkSub.page}
                                                        onClick={() =>
                                                            handleNavigate(
                                                                linkSub.href
                                                            )
                                                        }
                                                    >
                                                        <ListItemText
                                                            primary={
                                                                <Typography variant="body1">
                                                                    {
                                                                        linkSub.page
                                                                    }
                                                                </Typography>
                                                            }
                                                            className={
                                                                classes.nested
                                                            }
                                                        />
                                                    </ListItem>
                                                );
                                            })}
                                        </List>
                                    </Collapse>
                                </>
                            )}
                        </React.Fragment>
                    );
                })}
            </List>
        </div>
    );
};

export default NavBurger;
