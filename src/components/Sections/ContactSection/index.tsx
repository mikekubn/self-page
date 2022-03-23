import React from 'react';
import Router from 'next/router';
import { hrefs } from 'src/configs/navigation';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { useIntersection, useNotification } from '@/hooks/index';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import Notification from '@/components/Notification';

const ContactSection = (): React.ReactElement => {
  const { visible, add: [ref] } = useIntersection();
  const [notification, setNotification] = useNotification();
  const form = React.useRef(null);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      emailjs.sendForm('service_usi3vfs', 'template_efxt2vf', event.currentTarget, 'iX4EH4E_q3qFoSzUG');
      setNotification({ visible: true, status: 'success', note: 'Email send success.' });
    } catch (e) {
      setNotification({ visible: true, status: 'error', note: 'Email send failed.' });
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
    <>
      {
        notification
          ? <Notification {...notification} />
          : null
      }
      <div id="contact" ref={ref} className="flex flex-row flex-1">
        <div className="flex flex-col flex-1 bg-purple">
          Picture
        </div>
        <div className="flex flex-col justify-center flex-1">
          <div className="flex flex-col overflow-auto">
            <form ref={form} onSubmit={handleSubmitForm} className="flex flex-col mx-14">
              <h3 className="flex pb-5 mx-auto text-lg font-AsapItal">Contact me</h3>
              <Input label="Subject" type="subject" name="subject" />
              <Input label="Full Name" type="text" name="from_name" />
              <Input label="Your Email" type="email" name="from_email" />
              <TextArea name="message" label="Your message" />
              <button
                type="submit"
                className="flex items-center justify-center h-12 border rounded-full cursor-pointer mt-7 w-52 text-sky500 hover:bg-sky500/5"
              >
                <p className="pr-3">Send</p>
                <Image src="/img/email.png" height={26} width={26} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
