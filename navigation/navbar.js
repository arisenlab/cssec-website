import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import Link from "next/link";
import { useRouter } from "next/router";
import routes from "./routes";

const useStyles = makeStyles(theme => ({
    linkStyles: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    collapseDesign: {
        backgroundColor: "#622A55",
        color: "#fff",
    },
}));

const Navbar = ({ currentRoute }) => {
    const classes = useStyles();

    const router = useRouter();

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        }
    }

    const navigateClick = href => {
        router.push(href);
        setOpen(false);
    };

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <>
            {routes.map(link => {
                return (
                    <React.Fragment key={link.page}>
                        {!link.submenu ? (
                            <>
                                <Link href={link.href} key={link.page}>
                                    <Button
                                        variant="text"
                                        href="#"
                                        className={classes.linkStyles}
                                    >
                                        <Typography style={{ color: "#fff" }}>
                                            {currentRoute === link.page ? (
                                                <u>{link.page}</u>
                                            ) : (
                                                <>{link.page}</>
                                            )}
                                        </Typography>
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Button
                                    ref={anchorRef}
                                    aria-controls={
                                        open ? "menu-list-grow" : undefined
                                    }
                                    aria-haspopup="true"
                                    onClick={handleToggle}
                                >
                                    <Typography
                                        style={{ color: "#fff" }}
                                        component="div"
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignContent: "center",
                                            }}
                                        >
                                            {link.page}
                                            <ExpandMoreIcon />
                                        </div>
                                    </Typography>
                                </Button>
                                <Popper
                                    open={open}
                                    anchorEl={anchorRef.current}
                                    role={undefined}
                                    transition
                                    disablePortal
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin:
                                                    placement === "bottom"
                                                        ? "center top"
                                                        : "center bottom",
                                            }}
                                            className={classes.collapseDesign}
                                        >
                                            <Paper>
                                                <ClickAwayListener
                                                    onClickAway={handleClose}
                                                >
                                                    <MenuList
                                                        autoFocusItem={open}
                                                        id="menu-list-grow"
                                                        onKeyDown={
                                                            handleListKeyDown
                                                        }
                                                    >
                                                        {link.submenu.map(
                                                            linkSub => {
                                                                return (
                                                                    <MenuItem
                                                                        onClick={() =>
                                                                            navigateClick(
                                                                                linkSub.href
                                                                            )
                                                                        }
                                                                        key={
                                                                            linkSub.page
                                                                        }
                                                                    >
                                                                        <Typography>
                                                                            {currentRoute ===
                                                                            linkSub.page ? (
                                                                                <u>
                                                                                    {
                                                                                        linkSub.page
                                                                                    }
                                                                                </u>
                                                                            ) : (
                                                                                <>
                                                                                    {
                                                                                        linkSub.page
                                                                                    }
                                                                                </>
                                                                            )}
                                                                        </Typography>
                                                                    </MenuItem>
                                                                );
                                                            }
                                                        )}
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </>
                        )}
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default Navbar;
