"use client";

import { useState } from "react";

const Displayer = ({ image, settings }) => {
  return (
    <div className="flex justify-center items-center w-1/2 bg-blue-500 text-white m-[5px] rounded">
      <div className="w-auto h-auto bg-green-500">image</div>
    </div>
  );
};
export default Displayer;
