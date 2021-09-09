import React from "react";

const NotFoundPage = () => {
  const textIcon = "｡ﾟ･（>﹏<）･ﾟ｡";
  return (
    <div className="text-primary flex flex-col items-center py-10">
      <div className="text-5xl py-8">{textIcon}</div>
      <div className="text-3xl my-12">404 Page Not Found</div>
    </div>
  );
};

export default NotFoundPage;
