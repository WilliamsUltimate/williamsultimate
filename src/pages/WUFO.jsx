import React from 'react';
import Navbar from '../components/Navbar';
import TeamLanding from '../components/TeamLanding';
import { HashLink as Link } from 'react-router-hash-link';
import Roster from '../components/Roster';
import Twitter from '../components/Twitter';
import Events from '../components/Events';

export default function WUFO() {
  return (
    <div className="flex flex-col">
      <div className="top-0" id="top">
        <Navbar team="wufo"/>
      </div>
      <div>
        <TeamLanding team="wufo"/>
      </div>
      <div id="roster">
        <Roster team="wufo"/>
      </div>

      {/* Upcoming Events and Twitter */}
      <div className="flex flex-row justify-between py-4">
        <div className="flex-grow" id="events">
          <Events team="wufo"/>
        </div>
        <div id="twitter">
          <Twitter handle="wufoultimate"/>
        </div>
      </div>

      <div className="flex flex-row justify-between p-4 w-full text-gray-500 z-10">
        <Link 
          smooth to='/wufo#top'
          className="bg-white p-2 shadow-drop text-gray-shadow"
        >
          Go back to top
        </Link>
      </div>
    </div>
  )
}
