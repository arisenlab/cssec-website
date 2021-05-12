import { Grid } from "@material-ui/core";
import SectionHeader from "components/general/section-header";
import React from "react";
import ContactBadge from "components/help-desk/contactBadge";

//import contacts from "data/contacts";

const ContactList = ({ contacts }) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <SectionHeader text="AdDU Offices Directory" />
            </Grid>
            {contacts.map(c => (
                <Grid item xs={12} key={c.id}>
                    <ContactBadge name={c.acf.name} details={c.acf.details} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ContactList;
