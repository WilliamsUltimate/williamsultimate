import React from 'react';
import Navbar from '../components/Navbar';
import TeamLanding from '../components/TeamLanding';
import About from '../components/About';
import Events from '../components/Events';
import Twitter from '../components/Twitter';
import Roster from '../components/Roster';
import About from '../components/About';

export default function WUFO() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <div id="top" className="top-0" >
        <Navbar team="wufo"/>
      </div>

      {/* Landing Image */}
      <div>
        <TeamLanding team="wufo"/>
      </div>

      {/* About */}
      <div id="about">
        <About/>
      </div>

      {/* News (Upcoming Events and Twitter) */}
      <div id="news" className="flex flex-col md:flex-row p-4 gap-8 place-items-center place-content-center min-h-screen bg-fixed bg-wufo bg-cover">
        <Events team="wufo"/>
        <Twitter handle="wufoultimate"/>
      </div>

      {/* Roster */}
      <div id="roster">
        <Roster team="wufo"/>
      </div>
    </div>
  )
}
