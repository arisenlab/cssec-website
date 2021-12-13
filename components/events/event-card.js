import React from "react";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import parse from "html-react-parser";
import { format, differenceInSeconds } from "date-fns";

const EventCard = ({ summary, timeStart, timeEnd, location, description }) => {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [happening, setHappening] = React.useState(false);

  React.useEffect(() => {
    window.setInterval(
      setCurrentTime(() => new Date()),
      1000
    );
  }, []);

  React.useEffect(() => {
    if (differenceInSeconds(currentTime, new Date(timeStart)) > 0) {
      setHappening(true);
    } else {
      setHappening(false);
    }
  }, [currentTime]);

  console.log(typeof description);

  return (
    <Paper style={{ padding: 15, marginBottom: 10 }}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="h5" align="left">
            <b>{summary}</b>
            {happening ? <> - Happening Right Now</> : null}
          </Typography>
          <Divider
            variant="fullWidth"
            style={{
              height: 3,
              backgroundColor: "#622a55",
            }}
          />
        </Grid>
        <Grid container spacing={1} item>
          <Grid item xs={6}>
            <Typography variant="body1">
              <b>{`Time: ${format(new Date(timeStart), "p")} - ${format(
                new Date(timeEnd),
                "p"
              )}`}</b>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <b>{`Venue: ${location ? location : "TBA"}`}</b>
            </Typography>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              align="justify"
              /* dangerouslySetInnerHTML={{ __html: description }} */
            >
              {description
                ? parse(String(description), {
                    replace: (domNode) => {
                      if (domNode?.tagName == "a") {
                        return (
                          <a
                            href={domNode?.attribs.href}
                            style={{ overflowWrap: "break-word" }}
                          >
                            {domNode?.attribs.href}
                          </a>
                        );
                      }
                    },
                  })
                : `IT Week 2021's ${summary}`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EventCard;
