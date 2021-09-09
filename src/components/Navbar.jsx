import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import TeamDropdown from './TeamDropdown';
import wufo from '../assets/wufopics/wufo.png';
import lawufa from '../assets/lawufapics/lawufa.png';
import buf from '../assets/bufpics/buf.png'

export default function Navbar(props) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="flex flex-row justify-start p-4 fixed w-full text-gray-500 text-sm md:text-lg z-40">
      <Link 
        to='/'
        className="bg-transparent pr-4"
      >
        <img src={props.team === 'wufo' ? wufo : (props.team === 'lawufa' ? lawufa : buf)} alt="Logo" className="h-12"/>
      </Link>
      <Link 
        smooth to={`/${props.team}#about`}
        className="py-2 px-1 md:px-4 text-white font-medium transition hover:text-purple-100 duration-125 ease-in-out"
        style={{ textShadow: '2px 2px #4C1D95' }}
      >
        About
      </Link>
      <Link 
        smooth to={`/${props.team}#news`}
        className="py-2 px-4 text-white font-medium transition hover:text-purple-100 duration-125 ease-in-out"
        style={{ textShadow: '2px 2px #4C1D95' }}
      >
        News
      </Link>
      <Link 
        smooth to={`/${props.team}#roster`}
        className="py-2 px-1 md:px-4 text-white font-medium transition hover:text-purple-100 duration-125 ease-in-out"
        style={{ textShadow: '2px 2px #4C1D95' }}
      >
        Roster
      </Link>
      <div className="flex flex-col">
        <div
          onClick={() => setOpenDropdown(!openDropdown)}
          className="flex flex-row place-items-center cursor-pointer py-2 px-1 md:px-4 text-white font-medium transition hover:text-purple-100 duration-125 ease-in-out"
          style={{ textShadow: '2px 2px #4C1D95' }}
        >
          {props.team === 'lawufa' ? 'La WUFA' : props.team.toUpperCase()}
          {openDropdown 
            ? <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>}
        </div>
        {openDropdown
          ? <div className="z-40 mt-1">
              <TeamDropdown team={props.team} />
            </div>
          : <></>}
      </div>
    </div>
  )
}
