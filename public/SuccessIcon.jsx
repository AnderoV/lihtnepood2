import * as React from "react";

function SuccessIcon(props) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M25 4.16663C13.5416 4.16663 4.16663 13.5416 4.16663 25C4.16663 36.4583 13.5416 45.8333 25 45.8333C36.4583 45.8333 45.8333 36.4583 45.8333 25C45.8333 13.5416 36.4583 4.16663 25 4.16663ZM20.8333 35.4166L10.4166 25L13.3541 22.0625L20.8333 29.5208L36.6458 13.7083L39.5833 16.6666L20.8333 35.4166Z" />
    </svg>
  );
}

export default SuccessIcon;
