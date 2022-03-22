import React from 'react';
import Router from 'next/router';
import { hrefs } from 'src/configs/navigation';
import { useIntersection } from '@/hooks/index';

const ContactSection = () => {
  const { visible, add: [ref] } = useIntersection();

  React.useEffect(() => {
    if (visible) {
      Router.push({
        pathname: '/',
        hash: hrefs.contact,
      }, undefined, { scroll: false });
    }
  }, [visible]);

  return (
    <div id="contact" ref={ref} className="flex flex-col flex-1 pt-24 pl-24">
      CONTANCT
    </div>
  );
};

export default ContactSection;
