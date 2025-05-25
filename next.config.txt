import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
const config: NextConfig = {
  // output: 'export',
};
export default withNextIntl(config);
