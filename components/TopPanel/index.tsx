import React from 'react';
import ToggleButton from 'components/ToggleButton';
import { useThemeContex } from 'providers/ThemeProvider';

const TopPanel = (): React.ReactElement => {
  const { state, toggle } = useThemeContex();

  return (
    <header className="fixed top-0 left-0 flex flex-row h-10 border-b border-blue w-[100%]">
      <ToggleButton value={state} callback={(val) => toggle(val)} />
    </header>
  );
};

export default TopPanel;
