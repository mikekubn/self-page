import React from 'react';

interface IToggleButton {
  value: boolean,
  callback: (val: boolean) => void,
}

const ToggleButton = ({ value, callback }: IToggleButton): React.ReactElement => (
  <label htmlFor="toggle-button" className="flex items-center cursor-pointer">
    <input
      onChange={() => callback(!value)}
      checked={value}
      type="checkbox"
      id="toggle-button"
      className="appearance-none sr-only peer"
    />
    <span
      className="flex p-1 rounded-full h-7 w-14 shrink-0 bg-gray duration-300 ease-in-out peer-checked:bg-green after:w-5 after:h-5 after:bg-blue after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"
    />
  </label>
);

export default ToggleButton;
