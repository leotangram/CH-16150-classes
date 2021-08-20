import React from "react";

const LessIcon = ({ className, onAction }) => {
  return (
    <svg
      onClick={onAction}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13H6v-2h12v2z"></path>
    </svg>
  );
};

export default LessIcon;
