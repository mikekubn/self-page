import React from 'react';
import Link from 'next/link';
import { navigation } from 'src/configs/navigation';

const Navigation = (): React.ReactElement => (
  <div className="flex flex-row">
    {
        navigation.map((nav) => (
          <Link href={nav.url} key={nav.url} scroll={false} replace passHref>
            <a className="flex items-center justify-center h-12 mr-10 border rounded-full cursor-pointer w-52 text-sky500 hover:bg-sky500/5">
              {nav.name}
            </a>
          </Link>
        ))
      }
  </div>
);

export default Navigation;
