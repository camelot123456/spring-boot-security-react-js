import React from "react";

function AlertCustom(props) {
  const { alertState, alertBody } = props;

  return (
    <div className={`alert alert-${alertState}`} role="alert">
      {alertBody}
    </div>
  );
}

export default AlertCustom;
