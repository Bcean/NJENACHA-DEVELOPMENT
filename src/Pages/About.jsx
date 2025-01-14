import React from "react";

export const About = () => {
  return (
    <main className="h-screen w-full flex flex-col gap-7  items-center justify-center text-center ">
      <h1 className="text-6xl">
        <strong>About Us</strong>
      </h1>
      <div className="flex px-[3%] justify-between items-center w-full h-fit">
        <h6 className="font-light text-2xl w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          voluptates maiores architecto officia id? Amet, deleniti blanditiis
          facilis et deserunt est asperiores, magni provident porro tempore
          aliquam explicabo quisquam voluptate?<br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          voluptates maiores architecto officia id? Amet, deleniti blanditiis
          facilis et deserunt est asperiores, magni provident porro tempore
          aliquam explicabo quisquam voluptate?
        </h6>
        <div className="bg-white w-[40%] h-[375px] border border-black rounded">
          img here
        </div>
      </div>
    </main>
  );
};
