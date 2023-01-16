/** @type {import('next').NextConfig} */

const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
    images: {
        domains: [],
    },
    sentry: {
        hideSourceMaps: false,
    }
}

const sentryWebpackPluginOptions = {
    url: "https://sentry.io/",
    org: "stefano-pigozzi",
    project: "steffoweb",
    silent: true,
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
