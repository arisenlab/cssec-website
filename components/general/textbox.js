import React from "react";
import { TextField } from "@material-ui/core";

const TextBox = props => {
    return (
        <TextField
            {...props}
            fullWidth
            margin="normal"
            variant="outlined"
            color="primary"
            InputProps={{
                style: {
                    backgroundColor: "#fff",
                },
            }}
        />
    );
};

export default TextBox;
