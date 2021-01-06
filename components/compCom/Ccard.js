import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    marginAutoContainer: {
      width: 100 + '%',
      height: 100 + '%',
      display: 'flex'
    },
    marginAutoItem: {
      margin: 'auto'
    },
    marginDescription:{
        marginLeft:10 + 'px',
        marginRight:10 + 'px',
    }
  }))

const Cardcommittee = ({ imgSrc, title, description }) => {
    const classes = useStyles()
    return (
        <div style={{margin:30}}>
            <div className={classes.marginAutoContainer}>
                <img className={classes.marginAutoItem} src={imgSrc} width="40%" />
            </div>
            <Paper style={{ marginTop: 10 }}>
                <Typography variant="h4" align="center">{title}</Typography>
                <Typography className={classes.marginDescription}variant="subtitle1">{description}</Typography>
            </Paper>
        </div>
    );
};

export default Cardcommittee;
