import React from 'react';
import Logo from '../images/react-logo.png';
import { Link } from "react-router-dom";



export default function Header(){
    return (
      <header>
        <div>
          <nav className ="flex fixed z-40 w-full justify-between px-5 py-2 content-center items-center bg-slate-900">
            <div className = "flex w-7/12">
              <img src={Logo} alt="React logo" className ="flex w-8 h-8 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center content-center justify-center"/>
              <span className="flex font-lobster justify-self-center items-center w-1/4 font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:4xl text-white">ReactTool</span>
            </div>   
            <ul className= "flex font-poppins items-center justify-self-center text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg text-white">
              <li >
                <Link to="/" className=" p-3">Home</Link>
              </li>
              <li >
                <Link to="/pricing" className=" p-3">Pricing</Link>
              </li>
              <li>
                <Link to="/about" className=" p-3">About</Link>
              </li>
              <li>
                <Link to="/contact" className=" p-3">Contact</Link>
              </li>
            </ul>
          </nav>  
          
        </div>
      </header>  
    );
  }

  