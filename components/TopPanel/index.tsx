import React from 'react';
import ToggleButton from 'components/ToggleButton';
import { useThemeContex } from 'providers/ThemeProvider';
import Image from 'next/image';
import Link from 'next/link';

const TopPanel = (): React.ReactElement => {
  const { state, toggle } = useThemeContex();

  return (
    <header className="fixed top-0 left-0 z-50 flex flex-row items-center px-7 h-14 w-[100%]">
      <div className="flex ml-auto">
        <RenderThemeImage val={state} />
        <ToggleButton value={state} callback={(val) => toggle(val)} />
        <PlaceholderLanguage />
      </div>
    </header>
  );
};

export default TopPanel;

const navigationConfig = [
  { name: 'Michael Kubín', url: '/#michael-kubin' },
  { name: 'Technology', url: '/#technology' },
  { name: 'Contact', url: '/#contact' },
];

const Navigation = () => (
  <div>
    {
      navigationConfig.map((nav) => (
        <Link href={nav.url} key={nav.url} scroll={false} passHref>
          <a href={nav.url} className="px-3 text-lg no-underline first:pl-0 hover:underline underline-offset-8">{nav.name}</a>
        </Link>
      ))
    }
  </div>
);

const PlaceholderLanguage = () => (
  <div className="flex flex-row items-center pl-4 cursor-pointer">
    <Image src="/img/translate.png" height={25} width={25} alt="Change language image" />
    <p className="p-2 text-sm">EN</p>
  </div>
);

const ProvideImage = ({ val }: { val: boolean }) => {
  if (val) {
    return (
      <Image src="/img/moon.png" height={30} width={30} />
    );
  }

  return (
    <Image src="/img/sun.png" height={30} width={30} />
  );
};

const RenderThemeImage = ({ val }: { val: boolean }) => (
  <div className="flex flex-row items-center p-2">
    <ProvideImage val={val} />
  </div>
);
