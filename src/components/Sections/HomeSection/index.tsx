import React from 'react';
import Link from 'next/link';
import { jobs_lan_en } from 'src/configs/lan_en';
import Router from 'next/router';
import { hrefs } from 'src/configs/navigation';
import Card from '@/components/Card';
import Navigation from '@/components/Navigation';
import Name from '@/components/Name';
import JobContent from '@/components/JobContent';
import { useIntersection } from '@/hooks/index';

const HomeSection = () => {
  const { visible, add: [ref] } = useIntersection();

  React.useEffect(() => {
    if (visible) {
      Router.push({
        pathname: '/',
        hash: hrefs.home,
      }, undefined, { scroll: false });
    }
  }, [visible]);

  return (
    <div id="home" ref={ref} className="flex flex-row flex-1">
      <div className="flex flex-col flex-1">
        <Name />
        <Navigation />
      </div>
      <div className="flex flex-col justify-center flex-1">
        <h1 className="mx-auto mt-16 mb-10 text-3xl font-AsapItal">Work</h1>
        <div className="flex flex-col mx-auto overflow-auto">
          {
            jobs_lan_en.map((job) => (
              <Link key={job.id} href="/experience/[experienceId]" as={`/experience/${job.id}`} passHref>
                <a>
                  <Card>
                    <JobContent truncate data={job} />
                  </Card>
                </a>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
