const Wordpress = require("wpapi");
const { backend_url } = require("./constants");

const wp = new Wordpress({
    endpoint: `${backend_url}/index.php/wp-json`,
});

wp.cssec_committees = wp.registerRoute(
    "wp/v2",
    "/cssec-committees/(?P<id>[\\d]+)"
);
wp.accss_posts = wp.registerRoute("wp/v2", "/accss-posts/(?P<id>[\\d]+)");
wp.accss_activities = wp.registerRoute(
    "wp/v2",
    "/accss-activities/(?P<id>[\\d]+)"
);

module.exports = wp;
