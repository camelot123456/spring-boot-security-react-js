import React, { useState, useEffect, memo } from "react";
import { useDispatch } from "react-redux";

import { removeMessage } from "../../redux/actions/role-action";

function AlertCustom(props) {
  const { alertState, alertBody } = props;
  const [fade, setFade] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (fade) {
        setFade(false);
      }
    }, 3000);

    return () => {
      dispatch(removeMessage());
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {fade && (
        <div className={`alert alert-${alertState}`} role="alert">
          {alertBody}
        </div>
      )}
    </>
  );
}

export default memo(AlertCustom);
