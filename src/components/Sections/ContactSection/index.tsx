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
    <div id="contact" ref={ref} className="flex flex-row flex-1">
      <div className="flex flex-col flex-1 bg-purple">Picture</div>
      <div className="flex flex-col flex-1 bg-green">Mail</div>
    </div>
  );
};

export default ContactSection;
