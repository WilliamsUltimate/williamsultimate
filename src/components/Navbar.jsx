import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(ref) {
  return (
    <div className="flex flex-row justify-between p-4 fixed w-full text-gray-500 z-10">
      <Link 
        to='/'
        className="bg-white p-2 shadow-drop text-gray-shadow"
      >
        Williams College Ultimate
      </Link>
      <div
        className="flex flex-row justify-between"
        style={{width: '15%'}}
        ref={ref}
      >
        <Link 
          to="/wufo"
          className="bg-white p-2 shadow-drop text-gray-shadow transition hover:bg-purple-100 duration-125 ease-in-out"
        >
          WUFO
        </Link>
        <Link 
          to='/lawufa'
          className="bg-white p-2 shadow-drop text-gray-shadow transition hover:bg-purple-100 duration-125 ease-in-out"
        >
          La WUFA
        </Link>
        <Link 
          to='/buf'
          className="bg-white p-2 shadow-drop text-gray-shadow transition hover:bg-purple-100 duration-125 ease-in-out"
        >
          BUF
        </Link>
      </div>
    </div>
  )
}
