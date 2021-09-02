import React from 'react';

export default function Player(props) {

  return (
    <div class="w-full rounded">
        <img src={require(`../assets/${props.team}pics/roster/${props.name}.jpg`).default}
             alt={`${props.name}`}/>
        <div class="capitalize text-gray-shadow text-center">
          {props.name}
        </div>
    </div>
  )
}
