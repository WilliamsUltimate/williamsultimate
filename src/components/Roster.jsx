import React from 'react';
import Player from '../components/Player';
import { wufoPlayers } from '../assets/wufo-players';

export default function Roster(props) {
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
          {props.team === 'wufo' ? 
            wufoPlayers.map(player => <Player
                                        isCaptain={player.isCaptain}
                                        team="wufo"
                                        name='' 
                                        first={player.name.split(' ')[0]}
                                        last={player.name.split(' ')[1]}
                                        number={player.number}
                                        nickname={player.nickname}
                                        pronouns={player.pronouns}
                                        year={player.year}
                                        position={player.position}
                                        hometown={player.hometown}
                                      />) 
            : lawufaplayers.map((player) => <Player 
                                              isCaptain={false}
                                              team="lafwufa"
                                              name={player} 
                                              first="asdf"
                                              last="asdf"
                                              number={1}
                                              nickname="asdf"
                                              pronouns="asdf"
                                              year="asdf"
                                              position="asdf"
                                              hometown="asdf"
                                            />)}
        </div>
      </div>
    </div>
  )
}
