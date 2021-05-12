import React from "react";
import {
    Paper,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    formControl: {
        marginTop: theme.spacing(3),
    },
}));

const RadioButton = ({
    title,
    aria_label,
    name,
    values,
    value,
    handleChange,
}) => {
    const classes = useStyles();
    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">{title} *</FormLabel>
            <RadioGroup
                aria-label={aria_label}
                name={name}
                value={value}
                onChange={handleChange}
            >
                {values.map(value => (
                    <FormControlLabel
                        key={value}
                        value={value}
                        control={<Radio required />}
                        label={value}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioButton;
