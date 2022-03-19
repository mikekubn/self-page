import React from 'react';

interface IProps {
  children: React.ReactNode,
}
const CenterLayout = ({ children }: IProps): React.ReactElement => (
  <main className="container flex flex-col flex-1 mx-auto w-[1200px]">
    {children}
  </main>
);

export default CenterLayout;
