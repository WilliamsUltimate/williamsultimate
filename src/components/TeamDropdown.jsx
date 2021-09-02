import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamDropdown(props) {
  const otherTeams = 
    props.team === 'wufo' 
      ? ['lawufa', 'buf'] 
      : (props.team === 'lawufa' 
          ? ['wufo', 'buf'] 
          : ['wufo', 'lawufa']);

  const displayName = teamName => {
    return teamName === 'lawufa' ? 'La WUFA' : teamName.toUpperCase();
  }
  
  return (
    <div className="bg-white rounded p-2 text-purple-900 w-28">
      <ul>
        <li>
          <Link
            className="p-2 transition hover:text-purple-500 duration-125 ease-in-out"
            to={`/${otherTeams[0]}`}
          >
            {displayName(otherTeams[0])}
          </Link>
        </li>
        <li>
          <Link
            className="p-2 transition hover:text-purple-500 duration-125 ease-in-out"
            to={`/${otherTeams[1]}`}
          >
            {displayName(otherTeams[1])}
          </Link>
        </li>
      </ul>
    </div>
  )
};