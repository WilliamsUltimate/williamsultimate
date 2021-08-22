import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar(props) {
  return (
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
          to={{
            pathname: `/${props.team}`
          }}
          className="bg-white p-2 shadow-drop text-gray-shadow transition hover:bg-purple-100 duration-125 ease-in-out"
        >
          {props.team.toUpperCase()}
        </Link>
        <Link 
          to='/lawufa'
          className="bg-white p-2 shadow-drop text-gray-shadow transition hover:bg-purple-100 duration-125 ease-in-out"
        >
          About
        </Link>
        <Link 
          to='/buf'
          className="bg-white p-2 shadow-drop text-gray-shadow transition hover:bg-purple-100 duration-125 ease-in-out"
        >
          Roster
        </Link>
      </div>
    </div>
  )
}
