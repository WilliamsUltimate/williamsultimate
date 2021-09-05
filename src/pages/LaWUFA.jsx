import React from 'react';
import Navbar from '../components/Navbar';
import TeamLanding from '../components/TeamLanding';
import { HashLink as Link } from 'react-router-hash-link';
import Roster from '../components/Roster';

export default function LaWUFA() {
  return (
    <div className="flex flex-col">
    <div className="top-0" id="top">
      <Navbar team="lawufa"/>
    </div>
    <div>
      <TeamLanding team="lawufa"/>
    </div>
    <div className="flex flex-row justify-between p-4 w-full text-gray-500 z-10">
    <Link 
      smooth to='/lawufa#top'
      className="bg-white p-2 shadow-drop text-gray-shadow"
    >
      Go back to top
    </Link>
    </div>
    <div id="roster">
      <br/>
      <Roster team="lawufa"/>
    </div>
  </div>
  )
}
