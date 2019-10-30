import React, { useState } from "react";

const Toggle = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => { setIsShown(false); document.body.classList = ''; }
  const show = () => { setIsShown(true); document.body.classList = 'modal-open';}

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};

export default Toggle;