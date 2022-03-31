import React from 'react';
import { IJob } from 'src/configs/lan_en';

const JobContent = ({ data, truncate }: { data: IJob, truncate: boolean }): React.ReactElement => {
  const {
    companyName, date, where, position, description,
  } = data;

  const abridge = truncate ? 'truncate' : '';

  return (
    <div className="m-3 flex-row-1">
      <div className="flex flex-col">
        <div className="w-16 h-16 bg-yellow" />
      </div>
      <div className="flex w-48 ml-2 flex-col-1 lg:w-96">
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
