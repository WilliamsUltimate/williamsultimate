import React from 'react';
import Player from '../components/Player';
import { HashLink as Link } from 'react-router-hash-link';
import { wufoPlayers } from '../assets/wufo-players';
import { novaPlayers } from '../assets/nova-players';

export default function Roster(props) {
  return (
    <div className="overflow-hidden bg-gradient-to-bl from-purple-400 via-purple-600 to-purple-800">
      <div className="mt-16 grid justify-items-center">
        <h1 className="text-4xl text-white font-semibold">2021-2022 Roster</h1>
        <div class="container flex justify-center flex-wrap gap-x-8 gap-y-8 mt-8 mb-16">
          {props.team === 'wufo' ? 
            wufoPlayers.map(player => <Player
                                        isCaptain={player.isCaptain}
                                        team="wufo"
                                        first={player.name.split(' ')[0]}
                                        last={player.name.split(' ')[1]}
                                        number={player.number}
                                        nickname={player.nickname}
                                        pronouns={player.pronouns}
                                        year={player.year}
                                        position={player.position}
                                        hometown={player.hometown}
                                      />) 
            : novaPlayers.map((player) => <Player 
                                              isCaptain={player.isCaptain}
                                              team="nova"
                                              first={player.name.split(' ')[0]}
                                              last={player.name.split(' ')[1]}
                                              number={player.number}
                                              nickname={player.nickname}
                                              pronouns={player.pronouns}
                                              year={player.year}
                                              position={player.position}
                                              hometown={player.hometown}
                                            />)}
        </div>
      </div>
      <div className="p-4 w-full z-10">
        <Link 
          smooth to={`/${props.team}#top`}
          className="text-white font-medium transition hover:text-purple-100 duration-125 ease-in-out"
          style={{ textShadow: '2px 2px #4C1D95' }}
        >
          Go back ↑
        </Link>
      </div>
    </div>
  )
}
