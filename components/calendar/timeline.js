import React from "react";
import {
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
} from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
import TimelineDot from "@material-ui/lab/TimelineDot";

export const TimelineItem1 = ({ date, children }) => {
    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="body1" color="textSecondary">
                    {date}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{children}</TimelineContent>
        </TimelineItem>
    );
};

export const TimelineItem2 = ({ date, children, rightAlign = "" }) => {
    return (
        <TimelineItem>
            <TimelineContent align={rightAlign}>{children}</TimelineContent>
            <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineOppositeContent>
                {date ? (
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        align="left"
                    >
                        {date}
                    </Typography>
                ) : null}
            </TimelineOppositeContent>
        </TimelineItem>
    );
};
