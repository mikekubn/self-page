import React from 'react';

interface ICard {
  children: React.ReactNode,
  handleClick?: () => void,
}

const Card = ({ children, handleClick }: ICard): React.ReactElement => (
  <section
    onClick={handleClick}
    className="flex h-48 mb-10 border border-solid shadow-lg border-sky500/5 rounded-2xl shadow-sky500/5 hover:bg-sky500/5"
  >
    <div className="flex w-full cursor-pointer p-7">
      {children}
    </div>
  </section>
);

export default Card;
