import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordion = withStyles({
    root: {
        border: "1px solid rgba(0, 0, 0, .125)",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
        "&$expanded": {
            margin: "auto",
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: "rgba(0, 0, 0, .03)",
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        minHeight: 56,
        "&$expanded": {
            minHeight: 56,
        },
    },
    content: {
        "&$expanded": {
            margin: "12px 0",
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const useStyles = makeStyles(theme => ({
    root: {
        width: "90%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "60%",
        flexShrink: 0,
    },
    accordionHeader: {
        backgroundColor: "#805376",
        color: "#fff",
    },
    accordionDetails: {
        backgroundColor: "#F5DCDC",
        overflowWrap: "break-word",
        wordWrap: "break-word",
        msWordBreak: "break-word",
        wordBreak: "break-word",
    },
}));

const Faqs = ({ faqs }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <div className={classes.root}>
                {faqs.map(faq => (
                    <Accordion
                        expanded={expanded === `panel${faq.id}`}
                        onChange={handleChange(`panel${faq.id}`)}
                        key={faq.id}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon style={{ color: "#fff" }} />
                            }
                            aria-controls={`panel${faq.id}bh-content`}
                            id={`panel${faq.id}bh-header`}
                            className={classes.accordionHeader}
                        >
                            <Typography className={classes.heading}>
                                {faq.acf.faq}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            className={classes.accordionDetails}
                            dangerouslySetInnerHTML={{ __html: faq.acf.answer }}
                        />
                    </Accordion>
                ))}
            </div>
        </>
    );
};

export default Faqs;
