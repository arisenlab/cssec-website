import {
    Button,
    FormGroup,
    FormControlLabel,
    TextField,
    Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import { useSnackbar } from "notistack";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import RadioButton from "components/general/radiobutton";
import Policy from "components/help-desk/policy";

import firebase from "utils/firebase";

const db = firebase.firestore();

const useStyles = makeStyles(theme => ({
    root: {
        width: "95%",
        margin: "auto",
    },
    container: {
        padding: 10,
    },
    textField: {
        color: "#C7ABAB",
    },
    formControl: {
        marginTop: theme.spacing(3),
    },
}));

const Dropbox = ({ user_name, user_email }) => {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    const [accessToken, setAccessToken] = React.useState("");
    const [loggedIn, setLoggedIn] = React.useState(false);

    //For Conditional Logic in Forms
    const [academic_view, setAcademicView] = React.useState(false);
    const [sis_view, setSisView] = React.useState(false);
    const [cssec_view, setCssecView] = React.useState(false);

    //For Forms
    const [course, setCourse] = React.useState("");
    const [email, setEmail] = React.useState(user_email);
    const [concern, setConcern] = React.useState("");
    const [subconcern, setSubconcern] = React.useState("");
    const [details, setDetails] = React.useState("");
    const [agreePolicy, setAgreePolicy] = React.useState(false);

    const [openPrivacyPolicy, setOpenPrivacyPolicy] = React.useState(false);

    firebase.auth().onAuthStateChanged(user => {
        //console.log("Damn");
        let dc = () => {};
        if (user) {
            // User is signed in.
            setLoggedIn(true);
        } else {
            // User is signed out.
            dc();
            setLoggedIn(false);
        }
    });

    const settingConcern = (conditionAcad, conditionSis, conditionCssec) => {
        setAcademicView(conditionAcad);
        setSisView(conditionSis);
        setCssecView(conditionCssec);

        setSubconcern("");
    };

    const resetValues = () => {
        setCourse("");
        setConcern("");
        setSubconcern("");
        setDetails("");
        setAgreePolicy(false);
    };

    const notify = (condition, message) => {
        enqueueSnackbar(message, {
            variant: condition,
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
                autoHideDuration: 3000,
            },
        });
    };

    const handleConcernChange = event => {
        let value = event.target.value;
        setConcern(value);

        if (value === "Academic Concerns") {
            settingConcern(true, false, false);
        } else if (value === "SIS Concerns") {
            settingConcern(false, true, false);
        } else if (value === "CSSEC Concerns") {
            settingConcern(false, false, true);
        } else if (value === "Others") {
            settingConcern(false, false, false);
        } else {
            return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        const dropboxRef = db.collection("dropbox");

        if (!agreePolicy) {
            notify("error", `Please check Privacy Policy Agreement`);
            return;
        }

        dropboxRef
            .add({
                course: course,
                addu_email: email,
                concern: concern,
                subconcern: subconcern,
                details: details,
                date_dropped: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(
                notify(
                    "success",
                    "Thanks for raising your concern, we'll keep in touch."
                )
            )
            .catch(error =>
                notify(
                    "error",
                    `Database error! ${error.message} (${error.code})`
                )
            );
        resetValues();
    };

    const responseGoogle = response => {
        let authResponse = response.getAuthResponse();
        let basicProfile = response.getBasicProfile();
        let credential = firebase.auth.GoogleAuthProvider.credential(
            authResponse.id_token
        );
        setAccessToken(authResponse.id_token);
        setEmail(basicProfile.getEmail());

        firebase
            .auth()
            .signInWithCredential(credential)
            .catch(function (error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                // The email of the user's account used.
                let email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                let credential = error.credential;
                // ...
                notify("error", `${errorCode} ${errorMessage} ${email}`);
                setAccessToken(null);
                resetValues();
            });
    };

    const logout = () => {
        firebase.auth().signOut();
        notify(
            "Success",
            "Thank you for using our Dropbox, feel free to come again if you have another concern."
        );
        resetValues();
    };

    React.useEffect(() => {
        resetValues();
        firebase.auth().signOut();

        return () => {
            if (loggedIn) {
                firebase.auth().signOut();
            }
        };
    }, []);

    return loggedIn && accessToken ? (
        <>
            <div style={{ textAlign: "center" }}>
                <GoogleLogout
                    clientId="46842289714-5pb818cblh3dblcd93if2jhtfmfjova6.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                ></GoogleLogout>
            </div>
            <form
                className={classes.root}
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <FormGroup>
                    <RadioButton
                        title="Course"
                        aria_label="al_course"
                        name="course"
                        values={[
                            "Computer Science",
                            "Data Science",
                            "Information Systems",
                            "Information Technology",
                        ]}
                        value={course}
                        handleChange={e => setCourse(e.target.value)}
                    />

                    <RadioButton
                        title="Concern"
                        aria_label="al_concern"
                        name="concern"
                        values={[
                            "Academic Concerns",
                            "SIS Concerns",
                            "CSSEC Concerns",
                            "Others",
                        ]}
                        value={concern}
                        handleChange={handleConcernChange}
                    />

                    {academic_view ? (
                        <RadioButton
                            title="Academic Concerns"
                            aria_label="al_concern_acad"
                            name="acad_concern"
                            values={[
                                "Grades",
                                "Subject itself",
                                "Professor",
                                "Others",
                            ]}
                            value={subconcern}
                            handleChange={e => setSubconcern(e.target.value)}
                        />
                    ) : null}

                    {sis_view ? (
                        <RadioButton
                            title="SIS Concerns"
                            aria_label="al_concern_sis"
                            name="sis_concern"
                            values={[
                                "Finance",
                                "Leave of Absence Process",
                                "Reinstatement Process",
                                "QPI Appeal",
                                "My Registration",
                            ]}
                            value={subconcern}
                            handleChange={e => setSubconcern(e.target.value)}
                        />
                    ) : null}

                    {cssec_view ? (
                        <RadioButton
                            title="CSSEC Concerns"
                            aria_label="al_concern_cssec"
                            name="cssec_concern"
                            values={["Committees", "SAMAHAN Related Concerns"]}
                            value={subconcern}
                            handleChange={e => setSubconcern(e.target.value)}
                        />
                    ) : null}

                    <TextField
                        id="concern_desc"
                        label="Concern Details"
                        placeholder="Enter your concern here"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                        variant="outlined"
                        color="primary"
                        required
                        InputProps={{
                            style: {
                                backgroundColor: "#fff",
                            },
                        }}
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                    />

                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => {
                            setOpenPrivacyPolicy(true);
                        }}
                    >
                        Terms and Condition
                    </Button>

                    <Policy
                        open={openPrivacyPolicy}
                        handleClose={() => {
                            setOpenPrivacyPolicy(false);
                        }}
                    />

                    <FormControlLabel
                        value="agreed"
                        control={
                            <Checkbox color="primary" checked={agreePolicy} />
                        }
                        label="I have read and agree to the Terms and Agreement."
                        labelPlacement="end"
                        onChange={e => setAgreePolicy(e.target.checked)}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        color="primary"
                        fullWidth
                    >
                        Drop it low low!
                    </Button>
                </FormGroup>
            </form>
        </>
    ) : (
        <div style={{ textAlign: "center" }}>
            <GoogleLogin
                clientId="46842289714-5pb818cblh3dblcd93if2jhtfmfjova6.apps.googleusercontent.com"
                buttonText="Login with AdDU Email"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                hostedDomain="addu.edu.ph"
            />
        </div>
    );
};

export default Dropbox;
