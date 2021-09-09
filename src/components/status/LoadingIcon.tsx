import React from "react";

const LoadingIcon = () => {
  return (
    <div className="text-primary flex flex-col items-center py-10">
      <div className="text-3xl p-8 animate-spin">(✿◠‿◠)</div>
      <div className="text-xl m-12">Loading...</div>
    </div>
  );
};

export default LoadingIcon;
