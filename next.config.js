// next.config.js
const withNextIntl = require('next-intl/plugin')('./next-intl.config.js');
module.exports = withNextIntl({
  experimental: {
    serverActions: {}
  }
});
