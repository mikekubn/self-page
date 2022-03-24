import React from 'react';
import { useThemeProvider } from 'src/providers/ThemeProvider';
import Image from 'next/image';
import ToggleButton from '@/components/ToggleButton';
import { useScroll } from '@/hooks/index';

const TopPanel = (): React.ReactElement => {
  const { move } = useScroll();
  const { state, toggle } = useThemeProvider();

  const display = move === 'down' ? 'hidden' : 'flex';

  return (
    <header className={`fixed top-0 left-0 z-50 ${display} flex-row items-center w-full px-7 h-14`}>
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
