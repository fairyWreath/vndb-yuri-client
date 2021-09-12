import React from "react";
import { Helmet } from "react-helmet";

const UnderConstruction = () => {
  const textIcon = "｡ﾟ･（>﹏<）･ﾟ｡";
  return (
    <div className="text-primary flex flex-col items-center py-10 bg-light min-h-screen text-center">
      <Helmet>
        <title>Under Construction · VNList</title>
      </Helmet>
      <div className="text-5xl py-8">(;￢＿￢)</div>
      <div className="text-3xl my-12">
        This Page is Under Construction, come back sometime later!
      </div>
    </div>
  );
};

export default UnderConstruction;
