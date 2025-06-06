'use client';
import {useRouter} from 'next/navigation';
import {Locale, useLocale} from 'next-intl';
import updateLocale from './updateLocale';
export default function AppNavigationLocaleSwitcher() {
  const router = useRouter();
  async function action(data: FormData) {
    await updateLocale(data);
    // Refetch the page to receive markup that
    // uses the latest value from the cookie
    router.refresh();
  }
  return (
    <form action={action} className="flex gap-3">
      <LocaleButton locale="vi" />
      <LocaleButton locale="en" />
    </form>
  );
}
function LocaleButton({locale}: {locale: Locale}) {
  const curLocale = useLocale();
  return (
    <button
      className={curLocale === locale ? 'underline' : undefined}
      name="locale"
      type="submit"
      value={locale}
    >
      {locale.toUpperCase()}
    </button>
  );
}
