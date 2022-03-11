import React from 'react';
import Link from 'next/link';
import { language_en } from 'src/languages/en_index';
import Card from '@/components/Card';
import Dialog from '@/components/Dialog';

const navigationConfig = [
  { name: 'Technology', url: '/#technology' },
  { name: 'Contact', url: '/#contact' },
];

const LeftSideHomePage = () => (
  <div className="flex flex-col flex-1 pl-24">
    <div className="flex flex-col justify-center flex-1">
      <h1 className="pt-5 pb-10 text-6xl font-Asap">Michael Kubín</h1>
      <p className="text-3xl italic font-AsapItal">Frontend developer</p>
    </div>
    <Navigation />
  </div>
);

const RightSideHomePage = () => {
  const [toggle, setToggle] = React.useState(false);
  const [id, setId] = React.useState<string>();

  const findTask = language_en.find((language) => language.id === id);

  React.useEffect(() => {
    if (!toggle) {
      setId('');
    }
  }, [toggle]);

  return (
    <>
      <Dialog
        open={toggle}
        handleClick={() => setToggle(false)}
        content={(
          <div className="w-2/4 m-auto bg-white h-2/4 dark:bg-gray-dark">
            {
                        findTask ? (
                          <>
                            <div className="w-[60px] h-[60px] bg-yellow" />
                            <div className="flex flex-col ml-10">
                              <h1 className="pb-1 text-lg font-AsapItal">{findTask.companyName}</h1>
                              <p className="text-sm italic font-Asap">{findTask.date}</p>
                              <p className="text-sm italic font-Asap">{findTask.where}</p>
                              <h1 className="pt-5 text-lg font-AsapItal">{findTask.jobdesc}</h1>
                              <div className="w-96 pr-7">
                                <p className="text-base">{findTask.desc}</p>
                              </div>
                            </div>
                          </>
                        )
                          : null
                    }
          </div>
              )}
      />
      <div className="flex flex-col justify-start flex-1 pt-24">
        <h1 className="mx-auto mb-10 text-3xl font-AsapItal">Work experience</h1>
        <div className="flex flex-col w-4/5 h-full mx-auto overflow-auto">
          {
            language_en.map((language) => (
              <Card
                key={language.id}
                handleClick={() => {
                  setToggle(true);
                  setId(language.id);
                }}
              >
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
            ))
          }
        </div>
      </div>
    </>
  );
};

const Navigation = () => (
  <div className="flex flex-row">
    {
      navigationConfig.map((nav) => (
        <Link href={nav.url} key={nav.url} scroll={false} replace passHref>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="flex items-center justify-center h-12 mr-10 border rounded-full cursor-pointer w-52 text-sky500 hover:bg-sky500/5">
            {nav.name}
          </a>
        </Link>
      ))
    }
  </div>
);

export { LeftSideHomePage, RightSideHomePage };
