import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiSuitcaseLine } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const changeActive = () => {
    if (window.scrollY < 600) {
      setActiveNav("#");
    } else if (window.scrollY > 300 && window.scrollY < 1200) {
      setActiveNav("#about");
    } else if (window.scrollY > 1200 && window.scrollY < 2100) {
      setActiveNav("#experience");
    } else if (window.scrollY > 2100 && window.scrollY < 3000) {
      setActiveNav("#services");
    } else if (window.scrollY > 3000 && window.scrollY < 3900) {
      setActiveNav("#portfolio");
    }else if(window.scrollY>3900)
      setActiveNav('#contact');
  };
  window.addEventListener("scroll", changeActive);
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiSuitcaseLine />
      </a>
      
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
