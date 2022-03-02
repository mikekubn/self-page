import React from 'react';

interface IToggleButton {
  value: boolean,
  callback: (val: boolean) => void,
}

const ToggleButton = ({ value, callback }: IToggleButton): React.ReactElement => {
  const [checked, setChecked] = React.useState<boolean>(value);

  const handleClick = () => {
    setChecked(!checked);
    callback(checked);
  };

  return (
    <label htmlFor="toggle-button" className="flex items-center p-2 ml-auto cursor-pointer">
      <input
        onChange={handleClick}
        checked={checked}
        type="checkbox"
        id="toggle-button"
        className="appearance-none sr-only peer"
      />
      <span className="flex h-8 p-1 ml-4 rounded-full w-14 shrink-0 bg-gray duration-300 ease-in-out peer-checked:bg-green after:w-6 after:h-6 after:bg-blue after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6" />
    </label>
  );
};

export default ToggleButton;
