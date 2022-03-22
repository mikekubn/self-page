import React from 'react';

const useIntersection = (options: any) => {
  const elementRef = React.useRef(null);

  //   const options = React.useCallback(() => ({
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 1,
  //   }), []);

  const handleIntersection = React.useCallback((entries: IntersectionObserverEntry[]) => {
    const ents = entries.map((entry) => ({ id: entry.target.id, intersecting: entry.isIntersecting }));
    console.log('ents', ...ents);
  }, []);

  React.useEffect(() => {
    const observe = new IntersectionObserver(handleIntersection, options);

    if (elementRef.current) {
      observe.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observe.unobserve(elementRef.current);
      }
    };
  }, [handleIntersection, options, elementRef]);

  return [elementRef];
};

export { useIntersection };
