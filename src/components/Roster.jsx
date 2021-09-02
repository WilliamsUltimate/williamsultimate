import React from 'react';
import Player from '../components/Player';

export default function Roster(props) {

  // TODO: Add missing sophomores
  const wufoplayers = ["ben", "bern", "burrito",
                       "donk", "elijah", "gordon",
                       "harry", "jape", "jonah",
                       "kerosene", "lasuna", "lucas",
                       "malcolm", "minhuy", "reece",
                       "scar"]

  // TODO: Add missing sophomores
  const lawufaplayers = ["Alice-Henry", "Annika", "Clare",
                         "Coco", "Lauren", "Mila",
                         "Nina", "Ruby", "Siri",
                         "Tula", "Victoria"]

  return (
    <div>
      <div class="container grid grid-cols-3 gap-2 mx-auto">
        {props.team === 'wufo' ? wufoplayers.map((player) => <Player team="wufo" name={player}/>) : 
                                 lawufaplayers.map((player) => <Player team="lafwufa" name={player}/>)}
      </div>
    </div>
  )
}
