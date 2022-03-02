import React from 'react';

const CenterLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <main className="container flex flex-col flex-1 mx-auto w-[1200px] h-[100vh]">
    {children}
  </main>
);

export default CenterLayout;
