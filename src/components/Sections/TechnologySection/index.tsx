import React from 'react';
import Router from 'next/router';
import { hrefs } from 'src/configs/navigation';
import { useIntersection } from '@/hooks/index';

const TechnologySection = () => {
  const { visible, add: [ref] } = useIntersection();

  React.useEffect(() => {
    if (visible) {
      Router.push({
        pathname: '/',
        hash: hrefs.technology,
      }, undefined, { scroll: false });
    }
  }, [visible]);

  return (
    <div ref={ref} id="technology" className="flex flex-col flex-1 pt-24 pl-24">
      TECHNOLOGY
    </div>
  );
};

export default TechnologySection;
