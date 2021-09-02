import React from 'react';
import Navbar from '../components/Navbar';
import { HashLink as Link } from 'react-router-hash-link';
import Roster from '../components/Roster';

export default function LaWUFA() {
  return (
    <div>
      <Navbar team="lawufa"/>
      <div id="roster">
        <br/>
        <Roster team="lawufa"/>
      </div>
    </div>
  )
}
