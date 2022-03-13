import React from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { IJob, jobs_lan_en } from 'src/configs/lan_en';
import { theme } from 'tailwind.config';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useTheme } from '@/provider/ThemeProvider';
import Name from '@/components/Name';

interface ITaskId {
  experienceId: string,
}

Modal.setAppElement('#__next');

const JobDescriptionPage = ({ experienceId }: ITaskId): React.ReactElement => {
  const router = useRouter();
  const { state: darkMode } = useTheme();
  const description: IJob | undefined = jobs_lan_en.find((job) => job.id === experienceId);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.href}`);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    router.prefetch('/');
  }, [router]);

  return (
    <>
      <Head>
        <title>Michael Kubín</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Modal
        isOpen // The modal should always be shown on page load, it is the 'page'
        onRequestClose={() => router.push('/')}
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
            background: `${darkMode ? `${theme.colors['gray-dark']}` : `${theme.colors.white}`}`,
          },
        }}
      >
        {
          description
            ? (
              <>
                <div className="flex flex-col flex-1 pb-20 pl-24">
                  <Name />
                  <Link href="/" passHref>
                    <a className="flex items-center justify-center h-12 mr-10 border rounded-full cursor-pointer w-52 text-sky500 hover:bg-sky500/5">
                      Close
                    </a>
                  </Link>
                </div>
                <div className="flex flex-col flex-1 pb-20 pr-24">
                  <div className="flex justify-start m-auto">
                    <div className="w-[60px] h-[60px] bg-yellow" />
                    <div className="flex flex-col ml-10">
                      <h1 className="pb-1 text-xl font-AsapItal">{description.companyName}</h1>
                      <p className="text-base italic font-Asap">{description.date}</p>
                      <p className="text-base italic font-Asap">{description.where}</p>
                      <h1 className="pt-5 text-xl font-AsapItal">{description.position}</h1>
                      <div className="mt-4 w-96 pr-7">
                        <p className="text-lg">{description.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    {/* TODO add notificaiton */}
                    <div className="pr-5 cursor-pointer">
                      <Image src="/img/link.png" width={28} height={28} alt="Copy link" onClick={() => copy()} />
                    </div>
                    <div className="pr-2">
                      <Image src="/img/fork.png" width={28} height={28} alt="Moved from home page" />
                    </div>
                    <p>{description.companyName}</p>
                  </div>
                </div>
              </>
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
