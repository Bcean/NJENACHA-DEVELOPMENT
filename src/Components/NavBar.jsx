import React from "react";

export const NavBar = () => {
  const goToAbout = () => {
    //scrolling is smooth and doesnt just jump to a part on the page
    window.scrollTo({ top: 900, behavior: "smooth" });
  };
  const goToProjects = () => {
    window.scrollTo({ top: 1600, behavior: "smooth" });
  };
  const goToContact = () => {
    window.scrollTo({ top: 2300, behavior: "smooth" });
  };

  const goToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="w-full h-[15vh] flex items-center px-[3%] justify-between fixed top-0 left-0 cursor-pointer z-50 ">
      <h1 className="text-2xl font-medium" onClick={goToHome}>
        NJENACHA DEVELOPMENT
      </h1>
      <ul className="w-2/6 flex justify-between">
        <li className="text-xl font-light cursor-pointer" onClick={goToAbout}>
          About
        </li>
        <li
          className="text-xl font-light cursor-pointer"
          onClick={goToProjects}
        >
          Projects
        </li>
        <li className="text-xl font-light cursor-pointer" onClick={goToContact}>
          Contact
        </li>
      </ul>
    </nav>
  );
};
