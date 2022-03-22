import React from 'react';

const useScroll = () => {
  const [startPositionY, setStartPositionY] = React.useState<number>();

  React.useEffect(() => {
    const { scrollY } = window;
    setStartPositionY(scrollY);
  }, [startPositionY]);

  const handleScroll = React.useCallback((e: Event) => {
    if (!e.currentTarget) {
      return;
    }

    if (!('scrollY' in e.currentTarget)) {
      return;
    }

    const { scrollY } = e.currentTarget;

    if (startPositionY !== undefined) {
      if (startPositionY > scrollY) {
        console.log('up', scrollY);
      } else if (startPositionY < scrollY) {
        console.log('down', scrollY);
      }
      setStartPositionY(scrollY);
    }
  }, [startPositionY]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
};

export { useScroll };
