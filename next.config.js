// next.config.js

const { backend_url } = require("./utils/constants");

module.exports = {
    // Target must be serverless
    target: "serverless",
    images: {
        domains: ["cssec-api.addu.edu.ph", "cssec.stdcdn.com"],
    },
    async rewrites() {
        return [
            { source: "/wp-admin", destination: `${backend_url}/wp-admin` },
        ];
    },
};
