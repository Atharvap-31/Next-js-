import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <h1 className="flex justify-center items-center text-2xl text-red-600 font-semibold my-2">
        Hello Blog Layout Page
      </h1>
      <p className="flex justify-center items-center text-lg text-green-600 font-semibold my-2">
        It Will persit in only Blog page no matter how much nested
      </p>
      {children}
    </>
  );
};

export default layout;
