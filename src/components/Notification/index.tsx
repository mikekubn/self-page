import React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { INotificaiton } from '@/hooks/useNotification';

interface INotificaitonBox {
  display: boolean,
  note: string,
  img: string,
}

const Notification = (props: INotificaiton): React.ReactElement | null => {
  const { visible, status, note } = props;

  if (status === 'success') {
    return (
      <NotificaitonBox display={visible} note={note} img="/img/success.png" />
    );
  }

  if (status === 'error') {
    return (
      <NotificaitonBox display={visible} note={note} img="/img/error.png" />
    );
  }

  return null;
};

const NotificaitonBox = ({ display, img, note }: INotificaitonBox) => (
  <AnimatePresence>
    {
      display ? (
        <motion.div
          key="notification"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: -28, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute right-0 z-50 mt-20"
        >
          <div className="flex items-center px-4 rounded-lg w-60 h-11 bg-sky500/5">
            <Image src={img} width={18} height={18} />
            <p className="pl-4">{note}</p>
          </div>
        </motion.div>
      )
        : null
    }
  </AnimatePresence>
);

export default Notification;
