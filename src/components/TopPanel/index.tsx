import React from 'react';
import { useTheme } from 'src/providers/ThemeProvider';
import Image from 'next/image';
import ToggleButton from '@/components/ToggleButton';

const TopPanel = (): React.ReactElement => {
  const { state, toggle } = useTheme();

  return (
    // TODO if scoll move header to hide mode
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
