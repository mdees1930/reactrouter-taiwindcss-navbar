import React, { useState } from 'react';
import Menu from '../images/menu-outline.svg';
import Close from '../images/close-circle-outline.svg';
import Logo from '../images/react-logo.png';
import { Link } from "react-router-dom";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

//border
// border-solid border-2 border-red-700

export default function Header(){
  let [open, setOpen] = useState(false);
    return (
      
      <header>
        <div>
          <nav className =" flex flex-col py-2 md:py-1 fixed z-40 items-left w-full bg-slate-900 md:flex md:flex-row md:justify-between md:items-center">
            
            <div className = "flex w-7/12 mb-50 md:pl-5 pl-5">
              <img src={Logo} alt="React logo" className =" flex w-10 h-10 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center content-center justify-center"/>
              <span className=" flex font-lobster justify-self-center items-center w-full font-bold text-3xl sm:text-3xl md:text-3xl lg:text-4xl text-white">ReactTool</span>
            </div>   
            
            
            <ul className= {`flex flex-col-reverse items-center md:bg-slate-900 z-[-1] md:z-auto left-0 w-full md:-w-auto pl-0 md:flex md:flex-row-reverse md:items-center md:pb-0 pb-2 md:pr-5 absolute md:static transition-all duration-500 ease-in text-sm sm:text-sm md:text-sm lg:text-lg font-poppins text-white ${open ? 'top-10 opacity-100 bg-slate-900 bg-opacity-80' : 'top-[-490px]'} md:opacity-100 opacity-100`}>
              
              <li className="p-5 md:p-2 md:flex md:justify-between">
                <Link to="/contact" className=" px-5 hover:text-gray-400 duration-500">CONTACT</Link>
              </li>
              <li className="p-5 md:p-2 md:flex md:justify-between">
                <Link to="/about" className=" px-5 hover:text-gray-400 duration-500">ABOUT</Link>
              </li>
              <li className="p-5 md:p-2 md:flex md:justify-between">
                <Link to="/pricing" className=" px-5 hover:text-gray-400 duration-500">PRICING</Link>
              </li>
              <li className="pt-10 p-5 md:p-2 md:flex md:justify-between">
                <Link to="/" className=" px-5 hover:text-gray-400 duration-500">HOME</Link>
              </li>
            </ul>

            <div onClick={()=>setOpen(!open)}>
              <img src={open ? Close : Menu} alt="MENU" className="flex mx-5 my-2 bg-white rounded-xl absolute top-0 right-0 w-8 h-8 cursor-pointer text-white text-md md:hidden"/>
            </div>

          </nav>  
        </div>
      </header>  
    );
  }

  