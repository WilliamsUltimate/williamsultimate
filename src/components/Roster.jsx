import React from 'react';
import Player from '../components/Player';

export default function Roster(props) {

  // TODO: Add missing sophomores
  const wufoplayers = ["ben", "bern", "burrito",
                       "donk", "elijah", "gordon",
                       "harry", "jape", "jonah",
                       "kerosene", "lasuna", "lucas",
                       "malcolm", "minh-huy", "reece",
                       "scar"]

  // TODO: Add missing sophomores
  const lawufaplayers = ["Alice-Henry", "Annika", "Clare",
                         "Coco", "Lauren", "Mila",
                         "Nina", "Ruby", "Siri",
                         "Tula", "Victoria"]

  return (
    <div className="overflow-hidden bg-gradient-to-bl from-purple-400 via-purple-600 to-purple-800">
      <div className="mt-16 grid justify-items-center">
        <h1 className="text-4xl text-white font-semibold">2021-2022 Roster</h1>
        <div class="container flex justify-center flex-wrap gap-x-8 gap-y-8 mt-8 mb-16">
          {props.team === 'wufo' ? wufoplayers.map((player) => <Player team="wufo" name={player}/>) : 
                                  lawufaplayers.map((player) => <Player team="lafwufa" name={player}/>)}
        </div>
      </div>
    </div>
  )
}
