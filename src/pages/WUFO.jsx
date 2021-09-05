import React from 'react';
import Navbar from '../components/Navbar';
import TeamLanding from '../components/TeamLanding';
import Roster from '../components/Roster';
import Twitter from '../components/Twitter';
import Events from '../components/Events';
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
      <section id="news" class="flex flex-row p-8 bg-fixed bg-wufo bg-cover">
          <div className="flex-grow pr-8">
            <Events team="wufo"/>
          </div>
          <div>
            <Twitter handle="wufoultimate"/>
          </div>
      </section>

      {/* Roster */}
      <div id="roster">
        <Roster team="wufo"/>
      </div>
    </div>
  )
}
