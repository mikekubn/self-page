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
      </div>
    </header>
  );
};

export default TopPanel;

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
