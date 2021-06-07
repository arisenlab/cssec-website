import dynamic from "next/dynamic";

import { Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ComputerIcon from "@material-ui/icons/Computer";
import DescriptionIcon from "@material-ui/icons/Description";

const ArchiveButton = dynamic(() =>
    import("components/archives/archiveButton")
);
const SectionHeader = dynamic(() =>
    import("components/general/section-header")
);
const Space = dynamic(() => import("components/general/space"));

const useStyles = makeStyles(() => ({
    root: {
        margin: "auto",
        width: "90%",
    },
}));

const Archives = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Space />
            <SectionHeader text="Project Archives" width="70%" />
            <Space />
            <Grid container spacing={10} justify="center">
                <Grid item>
                    <ArchiveButton
                        name="Thesis Documents"
                        icon={<DescriptionIcon style={{ fontSize: 150 }} />}
                        onClick={() =>
                            window.open(
                                "https://drive.google.com/drive/folders/1y0P7qgA1yT2azOqKjnNCyOecBiKaqfR5?usp=sharing"
                            )
                        }
                    />
                </Grid>
                <Grid item>
                    <ArchiveButton
                        name="Software Engineering"
                        icon={<ComputerIcon style={{ fontSize: 150 }} />}
                        onClick={() =>
                            window.open(
                                "https://drive.google.com/drive/folders/1y0P7qgA1yT2azOqKjnNCyOecBiKaqfR5?usp=sharing"
                            )
                        }
                        disabled={true}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Archives;
