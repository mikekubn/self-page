import React from 'react';

interface IProps {
  children: React.ReactNode,
}
const CenterLayout = ({ children }: IProps): React.ReactElement => (
  <main className="container flex flex-col flex-1 mx-auto max-w-screen-xl">
    {children}
  </main>
);

export default CenterLayout;
