import React from 'react';

interface IProps {
  label: string,
  type: string,
  name: string,
}

const Input = (props: IProps): React.ReactElement => {
  const { label, name, type } = props;

  return (
    <>
      <label className="py-2">{label}</label>
      <input required type={type} name={name} className="w-full h-10  pl-2 border-b rounded-lg border-sky500/70 hover:bg-sky500/10" />
    </>
  );
};

export default Input;
