const { google } = require("googleapis");

const google_calendar = google.calendar({
    version: "v3",
    auth: "AIzaSyCmXlTANOK9OVRKKt2rFmVs5LNajjQ9y14",
});

module.exports = google_calendar;
