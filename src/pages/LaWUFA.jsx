import React from 'react';
import Navbar from '../components/Navbar';
import TeamLanding from '../components/TeamLanding';
import { HashLink as Link } from 'react-router-hash-link';
import Roster from '../components/Roster';
import About from '../components/About';

export default function LaWUFA() {
  return (
    <div className="flex flex-col">
    <div className="top-0" id="top">
      <Navbar team="lawufa"/>
    </div>
    <div>
      <TeamLanding team="lawufa"/>
    </div>
    <div id="about">
        <About team="lawufa"/>
    </div>
    <div id="roster">
      <Roster team="lawufa"/>
    </div>
  </div>
  )
}
