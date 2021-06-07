import { ButtonBase, Paper, Typography, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ComputerIcon from "@material-ui/icons/Computer";

import Space from "components/general/space";

const useStyles = makeStyles(theme => ({
    paper: {
        "&: hover": {},
        backgroundColor: "#FFD8F6",
        padding: 30,
    },
    icon: {
        padding: 20,
        borderRadius: 100,
        backgroundColor: "#fff",
    },
    content: {
        display: "flex",
    },
}));

const ArchiveButton = props => {
    const { name, icon, onClick, disabled } = props;
    console.log(props);
    const classes = useStyles();
    return (
        <ButtonBase onClick={onClick} disabled={disabled}>
            <Paper className={classes.paper}>
                <Grid
                    container
                    spacing={3}
                    direction="column"
                    alignItems="center"
                >
                    <Grid item>
                        <div className={classes.icon}>{icon}</div>
                        <Space />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">{name}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </ButtonBase>
    );
};

export default ArchiveButton;
