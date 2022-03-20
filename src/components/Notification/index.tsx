import React from 'react';
import Image from 'next/image';
import { INotificaiton } from '@/hooks/useNotification';

const Notification = (props: INotificaiton): React.ReactElement | null => {
  const { visible, status, note } = props;

  const display = visible ? 'flex' : 'hidden';

  if (status === 'success') {
    return (
      <div className={`z-50 ${display} justify-end px-7`}>
        <div className="flex items-center px-4 mt-20 rounded-lg w-60 h-11 bg-sky500/5">
          <Image src="/img/success.png" width={18} height={18} />
          <p className="pl-4">{note}</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className={`z-50 ${display} justify-end px-7`}>
        <div className="flex items-center px-4 mt-20 rounded-lg w-60 h-11 bg-sky500/5">
          <Image src="/img/success.png" width={18} height={18} />
          <p className="pl-4">{note}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default Notification;
