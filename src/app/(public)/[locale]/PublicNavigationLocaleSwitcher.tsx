'use client';
import {Locale, useLocale} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation.public';
export default function PublicNavigationLocaleSwitcher() {
  return (
    <div className="flex gap-3 py-5">
      <LocaleLink locale="vi" />
      <LocaleLink locale="en" />
    </div>
  );
}
function LocaleLink({locale}: {locale: Locale}) {
  const pathname = usePathname();
  const isActive = useLocale() === locale;
  return (
    <Link
      className={isActive ? 'underline' : undefined}
      href={pathname}
      locale={locale}
    >
      {locale.toUpperCase()}
    </Link>
  );
}
