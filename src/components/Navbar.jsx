import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import TeamDropdown from './TeamDropdown';

export default function Navbar(props) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div>
      <div className="flex flex-row justify-between p-4 fixed w-full text-gray-500 z-10">
        <Link 
          to='/'
          className="bg-white p-2 shadow-drop text-gray-shadow"
        >
          Williams Ultimate
        </Link>
        <div
          className="flex flex-row justify-between"
          style={{width: '15%'}}
        >
          <Link 
            smooth to={`/${props.team}#about`}
            className="bg-white p-2 shadow-drop text-gray-shadow transition hover:bg-purple-100 duration-125 ease-in-out"
          >
            About
          </Link>
          <Link 
            smooth to={`/${props.team}#roster`}
            className="bg-white p-2 shadow-drop text-gray-shadow transition hover:bg-purple-100 duration-125 ease-in-out"
          >
            Roster
          </Link>
          <div className="flex flex-col">
            <div
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex flex-row place-items-center cursor-pointer bg-white p-2 shadow-drop text-gray-shadow transition hover:bg-purple-100 duration-125 ease-in-out"
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
          </div>
        </div>
      </div>
      {openDropdown
        ? <div className="fixed z-40 mt-2 top-16 right-4">
            <TeamDropdown team={props.team} />
          </div>
        : <></>}
    </div>
    
  )
}
