import React from 'react';
import Image from 'next/image';
import { INotificaiton } from '@/hooks/useNotification';

interface INotificaitonBox {
  display: string,
  note: string,
  img: string,
}

const Notification = (props: INotificaiton): React.ReactElement | null => {
  const { visible, status, note } = props;

  const display = visible ? 'flex' : 'hidden';

  if (status === 'success') {
    return (
      <NotificaitonBox display={display} note={note} img="/img/success.png" />
    );
  }

  if (status === 'error') {
    return (
      <NotificaitonBox display={display} note={note} img="/img/error.png" />
    );
  }

  return null;
};

const NotificaitonBox = ({ display, img, note }: INotificaitonBox) => (
  <div className={`z-50 ${display} justify-end px-7 animate-move`}>
    <div className="flex items-center px-4 mt-20 rounded-lg w-60 h-11 bg-sky500/5">
      <Image src={img} width={18} height={18} />
      <p className="pl-4">{note}</p>
    </div>
  </div>
);

export default Notification;
