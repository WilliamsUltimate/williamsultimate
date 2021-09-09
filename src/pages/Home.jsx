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
    <div class="home">
      {/* Background image */}
      <div class="background"/>

      {/* Team discs */}
      <TeamDisc team="wufo" />
      <TeamDisc team="lawufa" />
      <TeamDisc team="buf" />

      {/* Williams Ultimate text logo */}
      <div className="relative justify-center items-center text-white text-center h-full w-full">
        <h1 className="italic font-medium" style={{ textShadow: '0.5vw 0.5vw #4C1D95', fontSize: 'calc(1em + 7vw)' }}>
          Williams Ultimate 
        </h1>
      </div>

      {/* Random disc button */}
      <div className="absolute bottom-8" style={{left: '50%', transform: 'translateX(-50%)'}}>
        <Link className="relative px-5 py-2 font-medium text-white group"
              to={{ pathname: `/${catchRandomDisc()}` }}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
        >
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
            <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
            <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
            <span class="relative">{isShown ? 'Or catch a random one!' : 'Click on a disc!'}</span>
        </Link>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 italic" style={{left: '50%', transform: 'translateX(-50%)', fontSize: '0.8em'}}>
        Made with 💜 by Alan & Rito
      </div>
    </div>
  )
}
