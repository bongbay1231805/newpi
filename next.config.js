import withNextIntl from 'next-intl/plugin';
import i18nConfig from './next-intl.config.js';
const nextConfig = {
  experimental: {
    serverActions: {}
  }
};
export default withNextIntl(i18nConfig)(nextConfig);
