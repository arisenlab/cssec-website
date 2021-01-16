const { google } = require("googleapis");

const google_calendar = google.calendar({
    version: "v3",
    auth: process.env.GOOGLE_API,
});

module.exports = google_calendar;
