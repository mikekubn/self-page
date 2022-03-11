import React from 'react';
import { IJob } from 'src/configs/lan_en';

const JobContent = ({ data, isModal }: { data: IJob, isModal?: boolean }): React.ReactElement => {
  const {
    companyName, date, where, position, description,
  } = data;

  console.log('isModal', isModal);

  return (
    <>
      <div className="w-[60px] h-[60px] bg-yellow" />
      <div className="flex flex-col ml-10">
        <h1 className="pb-1 text-lg font-AsapItal">{companyName}</h1>
        <p className="text-sm italic font-Asap">{date}</p>
        <p className="text-sm italic font-Asap">{where}</p>
        <h1 className="pt-5 text-lg font-AsapItal">{position}</h1>
        <div className="w-96 pr-7">
          <p className="text-base truncate">{description}</p>
        </div>
      </div>
    </>
  );
};

export default JobContent;
