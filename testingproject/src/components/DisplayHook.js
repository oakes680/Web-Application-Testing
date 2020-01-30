import { useState } from 'react';

const UseDisplayHook = () => {
  let [button, setButton] = useState(0);
  const buttonClick = e => {
    setButton(button+ 1);
  };

  return [button, buttonClick, setButton];
};

export default UseDisplayHook;
