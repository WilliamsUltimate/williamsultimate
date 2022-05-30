import React from 'react';
import Navbar from '../components/Navbar';
import TeamLanding from '../components/TeamLanding';
import About from '../components/About';
import Events from '../components/Events';
import Twitter from '../components/Twitter';
import Roster from '../components/Roster';

export default function NOVA() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <div id="top" className="top-0" >
        <Navbar team="nova"/>
      </div>

      {/* Landing Image */}
      <div>
        <TeamLanding team="nova"/>
      </div>

      {/* About */}
      <div id="about">
        <About team="nova"/>
      </div>

      {/* News (Upcoming Events and Twitter) */}
      <div id="news" className="flex flex-col md:flex-row p-4 gap-8 place-items-center place-content-center min-h-screen bg-fixed bg-nova bg-cover">
        <Events team="nova"/>
        <Twitter handle="lifewithnova69"/>
      </div>

      {/* Roster */}
      <div id="roster">
        <Roster team="nova"/>
      </div>
    </div>
  )
}
