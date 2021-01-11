import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import BusinessIcon from "@material-ui/icons/Business";

import ImageGallery from "react-image-gallery";

import accss_act_data from "../../data/accss-activities";

import { media_url } from "../../utils/constants";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `wrapped-tab-${index}`,
        "aria-controls": `wrapped-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: "85%",
        margin: "auto",
    },
    tab: { backgroundColor: "#622A55" },
}));

const Activities = ({ activities }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(activities[0].id);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getImages = (fileName, num, date) => {
        let dateHandler = date.split("-");
        let month = dateHandler[1];
        let year = dateHandler[0];

        let images = [];
        for (let i = 0; i < num; i++) {
            images.push(
                `${media_url}/${year}/${month}/${fileName}_${i + 1}.jpg`
            );
        }

        return images;
    };

    const hasPictures = num => {
        return num > 0 ? true : false;
    };

    return (
        <div className={classes.root}>
            <Typography variant="h4">Activities handled by ACCSS</Typography>
            <AppBar position="static" className={classes.tab}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                >
                    {activities.map(activity => {
                        return (
                            <Tab
                                value={activity.id}
                                label={activity.acf.name}
                                wrapped
                                {...a11yProps(`${activity.id}`)}
                                key={activity.id}
                            />
                        );
                    })}
                </Tabs>
            </AppBar>
            {activities.map(activity => {
                return (
                    <TabPanel
                        value={value}
                        index={activity.id}
                        key={activity.id}
                    >
                        <Grid container spacing={2} alignItems="center">
                            <Grid item md={5}>
                                <Typography variant="h3">
                                    {activity.acf.name}
                                </Typography>
                                <Typography variant="body1">
                                    {activity.acf.description}
                                </Typography>
                            </Grid>
                            <Grid item md={7}>
                                {hasPictures(activity.acf.number_of_pics) ? (
                                    <>
                                        <ImageGallery
                                            lazyload
                                            items={getImages(
                                                activity.acf.pictures_file_name,
                                                activity.acf.number_of_pics,
                                                activity.date
                                            ).map(picture => ({
                                                original: picture,
                                                thumbnail: picture,
                                            }))}
                                        />
                                    </>
                                ) : (
                                    <Typography>NO PHOTOS</Typography>
                                )}
                            </Grid>
                        </Grid>
                    </TabPanel>
                );
            })}
        </div>
    );
};

export default Activities;
