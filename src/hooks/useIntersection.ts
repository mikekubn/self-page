import React from 'react';

interface IOptions {
  root: null,
  rootMargin: string,
  threshold: number,
}

const useIntersection = (options: IOptions) => {
  const elementRef = React.useRef(null);
  const [visible, setIsVisible] = React.useState<boolean>();

  const handleIntersection = React.useCallback((entry: IntersectionObserverEntry) => {
    setIsVisible(entry.isIntersecting);
  }, []);

  React.useEffect(() => {
    const observe = new IntersectionObserver(([entry]) => handleIntersection(entry), options);

    if (elementRef.current) {
      observe.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observe.unobserve(elementRef.current);
      }
    };
  }, [options, elementRef, handleIntersection]);

  return {
    visible,
    add: [elementRef],
  };
};

export { useIntersection };
