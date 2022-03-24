import React from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { IJob, jobs_lan_en } from 'src/configs/lan_en';
import { theme } from 'tailwind.config';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useThemeProvider } from '@/provider/ThemeProvider';
import Name from '@/components/Name';
import JobContent from '@/components/JobContent';
import { useNotificationProvider } from '@/provider/NotificationProvider';
import MotionDiv from '@/components/Motions/MotionDiv';

interface ITaskId {
  experienceId: string,
}

Modal.setAppElement('#__next');

const JobDescriptionPage = ({ experienceId }: ITaskId): React.ReactElement => {
  const router = useRouter();
  const { state: darkMode } = useThemeProvider();
  const description: IJob | undefined = jobs_lan_en.find((job) => job.id === experienceId);
  const { dispatch } = useNotificationProvider();
  const [close, setClose] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.href}`);
      dispatch({ visible: true, status: 'success', note: 'Copied success.' });
    } catch (e) {
      dispatch({ visible: true, status: 'error', note: 'Copied failed.' });
    }
  };

  React.useEffect(() => {
    router.prefetch('/');
  }, [router]);

  return (
    <>
      <Head>
        <title>{description?.companyName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Modal
        isOpen // The modal should always be shown on page load, it is the 'page'
        onRequestClose={() => {
          router.push('/');
        }}
        contentLabel="JobDescriptionPage modal"
        style={{
          overlay: {
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
          },
          content: {
            padding: '0px',
            display: 'flex',
            flex: '1',
            border: '0px',
            borderRadius: '0px',
            position: 'revert',
            background: `${darkMode ? `${theme.colors.gray900}` : `${theme.colors.white}`}`,
          },
        }}
      >
        {
          description
            ? (
              <MotionDiv>
                <div className="flex flex-row flex-1 p-24 pt-0 pb-20">
                  <div className="flex flex-col flex-1">
                    <Name />
                    <Link href="/" passHref>
                      <a className="flex items-center justify-center h-12 mr-10 border rounded-full cursor-pointer w-52 text-sky500 hover:bg-sky500/5">
                        Close
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-start m-auto">
                      <JobContent truncate={false} data={description} />
                    </div>
                    <div className="flex justify-end">
                      <div onClick={copy} className="flex items-center justify-center w-12 h-12 border rounded-full cursor-pointer text-sky500 hover:bg-sky500/5">
                        <Image src="/img/link.png" width={28} height={28} alt="Copy link" />
                      </div>
                      <div className="flex items-center justify-center pl-4">
                        <Image src="/img/fork.png" width={28} height={28} alt="Moved from home page" />
                        <p className="pl-2">{description.companyName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            )
            // TODO fix not found page
            : <div>Sorry not found!</div>
        }
      </Modal>
    </>
  );
};

export default JobDescriptionPage;

export function getStaticProps({ params: { experienceId } }: { params: ITaskId }) {
  return { props: { experienceId } };
}

export function getStaticPaths() {
  return {
    paths: jobs_lan_en.map((job) => ({
      params: { experienceId: job.id },
    })),
    fallback: false,
  };
}
