import React from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { IJob, jobs_lan_en } from 'src/configs/lan_en';
import JobContent from '@/components/JobContent';

interface ITaskId {
  experienceId: string,
}

Modal.setAppElement('#__next');

const JobDescriptionPage = ({ experienceId }: ITaskId): React.ReactElement => {
  const router = useRouter();
  const description: IJob | undefined = jobs_lan_en.find((job) => job.id === experienceId);

  React.useEffect(() => {
    router.prefetch('/');
  }, [router]);

  return (
    <>
      <Modal
        isOpen // The modal should always be shown on page load, it is the 'page'
        onRequestClose={() => router.push('/')}
        contentLabel="JobDescriptionPage modal"
        style={{
          overlay: {
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            justifyContent: 'center',
          },
          content: {
            opacity: '0.5',
            border: '0px',
            borderRadius: '25px',
            position: 'revert',
            width: '50%',
            height: '40%',
            margin: '0 auto',
          },
        }}
      >
        {
          description
            ? <JobContent data={description} isModal />
            : null
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
