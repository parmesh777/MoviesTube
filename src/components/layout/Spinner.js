import React from "react";

export const Spinner = () => {
  return (
    <div className="text-center">
      <div className="spinner-border text-success " role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
