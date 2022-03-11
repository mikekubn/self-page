import React from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { jobs_lan_en } from 'src/configs/lan_en';

interface ITaskId {
  taskId: string,
}

Modal.setAppElement('#__next');

const JobDescriptionPage = ({ taskId }: ITaskId): React.ReactElement => {
  const router = useRouter();

  React.useEffect(() => {
    router.prefetch('/');
  }, [router]);

  return (
    <>
      <Modal
        isOpen // The modal should always be shown on page load, it is the 'page'
        onRequestClose={() => router.push('/')}
        contentLabel="Post modal"
      >
        <div>
          Modal opened
          {' '}
          {taskId}
        </div>
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
    paths: jobs_lan_en.map((lg) => ({
      params: { taskId: lg.id },
    })),
    fallback: false,
  };
}
