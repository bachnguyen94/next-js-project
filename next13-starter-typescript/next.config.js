/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    webpack: (config) => {
    config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
    return config;
  },
}

module.exports = nextConfig
