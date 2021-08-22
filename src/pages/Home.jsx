import React, { useState } from 'react';
import '../styles/disc.css';
import '../styles/home.css';
import TeamDisc from '../components/TeamDisc';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isShown, setIsShown] = useState(false);
  const teams = ['wufo', 'lawufa', 'buf'];

  const catchRandomDisc = () => {
    const rand = Math.floor(Math.random() * 3);
    return teams[rand];
  };

  return (
    <div>
      <div class="background"></div>
      <div className="flex flex-row justify-between p-4 fixed w-full text-gray-500 z-10">
      <Link 
        to='/'
        className="bg-white p-2 shadow-drop text-gray-shadow transition hover:bg-purple-100 duration-125 ease-in-out"
      >
        Williams Ultimate
      </Link>
      <div
        className="flex flex-row justify-between"
        style={{width: '15%'}}
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
      <div
        className="fixed pt-16 z-10"
        style={{left: '50%', transform: 'translateX(-50%)'}}
      >
        <Link 
          to={{
            pathname: `/${catchRandomDisc()}`
          }}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          className="bg-white p-2 shadow-drop text-2xl text-gray-shadow transition hover:bg-purple-100 duration-125 ease-in-out"
        >
            {isShown ? 'Or click here for a random disc!' : 'Catch a disc!'}
        </Link>
      </div>
      <TeamDisc team="wufo" />
      <TeamDisc team="lawufa" />
      <TeamDisc team="buf" />
    </div>
  )
}
