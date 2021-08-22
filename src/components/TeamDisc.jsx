import React from 'react';
import wufologo from '../assets/wufopics/wufo.png';
import lawufalogo from '../assets/lawufapics/lawufa.png';
import buflogo from '../assets/bufpics/buf.png';
import { Link } from 'react-router-dom';

export default function TeamDisc(props) {
  return (
    <Link
      to={`/${props.team}`}
      className="bg-gradient-to-r from-gray-50 to-gray-100 transition-colors duration-500 ease-in-out hover:from-purple-50 hover:to-purple-100 cursor-pointer rounded-full flex items-center justify-center text-grey-200 text-2xl font-light font-sans border-2 border-black border-opacity-25 z-0"
      style={{ height: '210px', width: '210px' }}
    >
      <div className="fixed w-3/5 h-3/5 border border-gray-300 rounded-full"></div>
      <img
        className="fixed w-1/2 h-1/2"
        src={props.team === 'wufo' ? wufologo : (props.team === 'lawufa' ? lawufalogo : buflogo)}
        alt={`Click to view ${props.team.toUpperCase()}'s homepage.`}
      />
    </Link>
  )
}
