import siteMetadata from '@/data/siteMetadata';
import Link from 'next/link';

import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  return (
    <header className="flex items-center justify-between pb-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold">{siteMetadata.headerTitle}</div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
