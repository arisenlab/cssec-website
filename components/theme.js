import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#035B96",
        },
        secondary: {
            main: "#333333",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
    },
    typography: {
        button: {
            textTransform: "none",
        },
        h1: {
            fontSize: "5rem",
            fontFamily: "Archivo",
            fontWeight: 900,
        },
        h2: {
            fontFamily: "Archivo",
            fontWeight: 900,
        },
        h3: {
            fontFamily: "Archivo",
            fontWeight: 700,
        },
        h4: {
            fontFamily: "Archivo",
            fontWeight: 600,
        },
        h5: {
            fontFamily: "Archivo",
            fontWeight: 500,
        },
        h6: {
            fontFamily: "Archivo",
            fontWeight: 400,
        },
        subtitle1: {
            fontFamily: "Open Sans",
            fontWeight: 300,
        },
        subtitle2: {
            fontFamily: "Open Sans",
        },
        body1: {
            fontFamily: "Open Sans",
            fontWeight: 400,
        },
        body2: {
            fontFamily: "Open Sans",
        },
        fontFamily: "Archivo",
        fontWeight: 300,
    },
});

export default responsiveFontSizes(theme);
