import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Policy = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" color="primary">
                {
                    <Typography color="primary" variant="h5" component="span">
                        Privacy Policy
                    </Typography>
                }
            </DialogTitle>
            <DialogContent>
                <DialogContentText
                    id="alert-dialog-description"
                    component="div"
                >
                    <p>
                        Under the protection of the Republic Act 10173, also
                        known as the Data Privacy Act, the information you will
                        be submitting in this form will be used for Dropbox for
                        the CSSEC to accommodate your concerns. The following
                        information will be asked from you: 1) Email is for
                        verification of being an AdDU Student. 2) Course in
                        order to know the scope of your problem. 3) Concern
                        context.
                    </p>
                    <p>
                        Rest assured your anonymity is respected. The purpose of
                        getting your email is to know that you are from AdDU and
                        other emergency concerns regarding our side. The Course
                        is collected to understand more about your Concern.
                        Lastly, the Concern Context consists of 3 parts Concern,
                        Subconcern, and Details. We did this to organize your
                        concerns for us to give the answers efficiently.
                    </p>
                    <p>
                        Should you have any concern, you may send an email
                        tocssec@addu.edu.ph with the subject Dropbox | Concern
                        By submitting this form, you have read, understood, and
                        agreed to the terms indicated above.
                    </p>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Policy;
