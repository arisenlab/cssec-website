// next.config.js

const { backend_url } = require("./utils/constants");

module.exports = {
    // Target must be serverless
    target: "serverless",
    images: {
        domains: [backend_url],
    },
    async rewrites() {
        return [
            { source: "/wp-admin", destination: `${backend_url}/wp-admin` },
        ];
    },
};
