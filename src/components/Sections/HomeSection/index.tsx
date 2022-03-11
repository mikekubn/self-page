import React from 'react';
import Link from 'next/link';
import { jobs_lan_en } from 'src/configs/lan_en';
import Card from '@/components/Card';
import Navigation from '@/components/Navigation';
import Name from '@/components/Name';

const LeftSideHomePage = () => (
  <div className="flex flex-col flex-1 pl-24">
    <Name />
    <Navigation />
  </div>
);

const RightSideHomePage = () => (
  <div className="flex flex-col justify-start flex-1 pt-24">
    <h1 className="mx-auto mb-10 text-3xl font-AsapItal">Work experience</h1>
    <div className="flex flex-col w-4/5 h-full mx-auto overflow-auto">
      {
          jobs_lan_en.map((language) => (
            <Link key={language.id} href="/task/[taskId]" as={`/task/${language.id}`} passHref>
              { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
              <a>
                <Card>
                  <div className="w-[60px] h-[60px] bg-yellow" />
                  <div className="flex flex-col ml-10">
                    <h1 className="pb-1 text-lg font-AsapItal">{language.companyName}</h1>
                    <p className="text-sm italic font-Asap">{language.date}</p>
                    <p className="text-sm italic font-Asap">{language.where}</p>
                    <h1 className="pt-5 text-lg font-AsapItal">{language.jobdesc}</h1>
                    <div className="w-96 pr-7">
                      <p className="text-base truncate">{language.desc}</p>
                    </div>
                  </div>
                </Card>
              </a>
            </Link>
          ))
          }
    </div>
  </div>
);

export { LeftSideHomePage, RightSideHomePage };
