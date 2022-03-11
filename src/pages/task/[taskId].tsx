import React from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { IJob, jobs_lan_en } from 'src/configs/lan_en';
import JobContent from '@/components/JobContent';

interface ITaskId {
  taskId: string,
}

Modal.setAppElement('#__next');

const JobDescriptionPage = ({ taskId }: ITaskId): React.ReactElement => {
  const router = useRouter();

  const findJobDescription: IJob | undefined = jobs_lan_en.find((job) => job.id === taskId);

  React.useEffect(() => {
    router.prefetch('/');
  }, [router]);

  return (
    <>
      <Modal
        isOpen // The modal should always be shown on page load, it is the 'page'
        onRequestClose={() => router.push('/')}
        contentLabel="Task modal"
      >
        {
          findJobDescription
            ? <JobContent data={findJobDescription} />
            : null
        }
      </Modal>
    </>
  );
};

export default JobDescriptionPage;

export function getStaticProps({ params: { taskId } }: { params: ITaskId }) {
  return { props: { taskId } };
}

export function getStaticPaths() {
  return {
    paths: jobs_lan_en.map((job) => ({
      params: { taskId: job.id },
    })),
    fallback: false,
  };
}
