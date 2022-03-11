import React from 'react';
import Link from 'next/link';
import { jobs_lan_en } from 'src/configs/lan_en';
import Card from '@/components/Card';
import Navigation from '@/components/Navigation';
import Name from '@/components/Name';
import JobContent from '@/components/JobContent';

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
        jobs_lan_en.map((job) => (
          <Link key={job.id} href="/experience/[experienceId]" as={`/experience/${job.id}`} passHref>
            <a>
              <Card>
                <JobContent data={job} />
              </Card>
            </a>
          </Link>
        ))
          }
    </div>
  </div>
);

export { LeftSideHomePage, RightSideHomePage };
