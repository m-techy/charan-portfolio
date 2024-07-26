import React from "react";

const Header = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='main' className="header relative flex w-[90%] min-h-[15%] mx-auto py-6 text-white justify-between items-center font-sans">
      <div className="font-sans text-2xl font-light">Charan</div>
      <div className="w-[30%] flex justify-between text-sm">
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover-target">About</a>
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover-target">Projects</a>
        <a href="#papers" onClick={(e) => handleScroll(e, 'papers')} className="hover-target">Papers</a>
        <a href="#contacts" onClick={(e) => handleScroll(e, 'contacts')} className="hover-target">Contacts</a>
      </div>
      <div className="relative font-seaweed text-2xl">Techy</div>
      <div className="w-56 h-56 rounded-full border-[1.5px] border-dark-grey absolute right-[-7rem] top-[-5rem]"></div>
    </div>
  );
};

export default Header;
