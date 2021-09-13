import React from "react";

const LoadingIcon = () => {
  return (
    <div className="text-primary flex flex-col items-center pt-20 pb-10 bg-light min-h-screen text-center">
      <div className="text-3xl py-8 animate-spin">(✿◠‿◠)</div>
      <div className="text-xl my-12">Loading...</div>
    </div>
  );
};

export default LoadingIcon;
