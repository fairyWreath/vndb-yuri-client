import React from "react";
import { Helmet } from "react-helmet";

const ErrorIcon = () => {
  return (
    <div className="text-primary flex flex-col items-center py-10 bg-light min-h-screen  text-center">
      <Helmet>
        <title>Page Error · VNList</title>
      </Helmet>
      <div className="text-3xl py-8">(⌯˃̶᷄ ﹏ ˂̶᷄⌯)ﾟ</div>
      <div className="text-2xl my-12">Sorry, something went wrong...</div>
    </div>
  );
};

export default ErrorIcon;
