import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <div className="flex flex-col flex-1 pt-[80px] bg-yellow">
    {children}
  </div>
);

export default MainLayout;
