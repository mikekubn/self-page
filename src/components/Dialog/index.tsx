import React from 'react';

interface IDialog {
  open: boolean
  handleClick: () => void
  content: React.ReactNode
}

const Dialog = ({ ...props }: IDialog): React.ReactElement | null => {
  const { open, handleClick, content } = props;

  if (open) {
    return (
      <div className="absolute z-50 flex flex-1 w-screen h-screen bg-transparent/60">
        <button type="button" onClick={handleClick}>Close</button>
        {content}
      </div>
    );
  }

  return null;
};

export default Dialog;
