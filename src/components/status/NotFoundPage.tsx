import React from "react";
import { Helmet } from "react-helmet";
const NotFoundPage = () => {
  const textIcon = "｡ﾟ･（>﹏<）･ﾟ｡";
  return (
    <div className="text-primary flex flex-col items-center py-10 bg-light min-h-screen">
      <Helmet>
        <title>404 Page Not Found · VNList</title>
      </Helmet>
      <div className="text-5xl py-8">{textIcon}</div>
      <div className="text-3xl my-12">404 Page Not Found</div>
    </div>
  );
};

export default NotFoundPage;
