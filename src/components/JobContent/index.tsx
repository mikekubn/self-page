import React from 'react';
import { IJob } from 'src/configs/lan_en';

const JobContent = ({ data, truncate }: { data: IJob, truncate: boolean }): React.ReactElement => {
  const {
    companyName, date, where, position, description,
  } = data;

  const abridge = truncate ? 'truncate' : '';

  return (
    <div className="flex m-5">
      <div className="w-16 h-16 bg-yellow" />
      <div className="flex flex-col ml-10 w-96">
        <h1 className="pb-1 text-lg font-AsapItal">{companyName}</h1>
        <p className="text-sm italic font-Asap">{date}</p>
        <p className="text-sm italic font-Asap">{where}</p>
        <h1 className="pt-5 text-lg font-AsapItal">{position}</h1>
        <p className={`text-base ${abridge}`}>{description}</p>
      </div>
    </div>
  );
};

export default JobContent;
