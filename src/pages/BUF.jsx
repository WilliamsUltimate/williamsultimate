import React from 'react';
import Navbar from '../components/Navbar';
import TeamLanding from '../components/TeamLanding';
import About from '../components/About';
import Events from '../components/Events';
import Twitter from '../components/Twitter';
import Roster from '../components/Roster';

export default function BUF() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <div id="top" className="top-0" >
        <Navbar team="buf"/>
      </div>

      {/* Landing Image */}
      <div>
        <TeamLanding team="buf"/>
      </div>

      {/* About */}
      <div id="about">
        <About team="buf"/>
      </div>

      {/* News (Upcoming Events and Twitter) */}
      <div id="news" className="flex flex-col md:flex-row p-4 gap-8 place-items-center place-content-center min-h-screen bg-fixed bg-buf bg-cover">
        <Twitter handle="BufoAdventures"/>
      </div>
    </div>
  )
}
