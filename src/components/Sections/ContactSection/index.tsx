import React from 'react';
import Router from 'next/router';
import { hrefs } from 'src/configs/navigation';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { images } from 'src/configs/images';
import { useIntersection } from '@/hooks/index';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import { useNotificationProvider } from '@/provider/NotificationProvider';
import ImageTooltip from '@/components/ImageTooltip';

const ContactSection = (): React.ReactElement => {
  const { visible, add: [ref] } = useIntersection();
  const { dispatch } = useNotificationProvider();
  const form = React.useRef(null);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      emailjs.sendForm('service_usi3vfs', 'template_efxt2vf', event.currentTarget, 'iX4EH4E_q3qFoSzUG');
      dispatch({ visible: true, status: 'success', note: 'Email send success.' });
    } catch (e) {
      dispatch({ visible: true, status: 'error', note: 'Email send failed.' });
    }
  };

  React.useEffect(() => {
    if (visible) {
      Router.push({
        pathname: '/',
        hash: hrefs.contact,
      }, undefined, { scroll: false });
    }
  }, [visible]);

  return (
    <div id="contact" ref={ref} className="flex-row-1">
      <Gallery />
      <div className="flex-1 flex-col-center-content">
        <div className="flex flex-col overflow-auto">
          <form ref={form} onSubmit={handleSubmitForm} className="flex flex-col mx-14 w-96">
            <h3 className="flex pb-5 mx-auto text-lg font-AsapItal">Contact me</h3>
            <Input label="Subject" type="subject" name="subject" placeholder="Write here" />
            <Input label="Full Name" type="text" name="from_name" placeholder="Write here" />
            <Input label="Your Email" type="email" name="from_email" placeholder="example@foo.com" />
            <TextArea name="message" label="Your message" />
            <button
              type="submit"
              className="button-style"
            >
              <p className="pr-3">Send</p>
              <Image src="/img/email.png" height={26} width={26} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => (
  <div className="my-auto flex-row-1 h-96">
    {
      images.map((image) => (
        <ImageTooltip
          key={image.id}
          positon={image.position}
          root={image.src}
          height={90}
          width={90}
          alt={image.alt}
          tooltip={image.tooltop}
        />
      ))
    }
  </div>
);

export default ContactSection;
