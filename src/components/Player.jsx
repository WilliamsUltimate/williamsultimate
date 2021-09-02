import React from 'react';

export default function Player(props) {

  return (
    <div class="w-full rounded">
        {props.team === "wufo" ? 
          <img src={require(`../assets/wufopics/roster/${props.name}.jpg`).default}
               alt={`${props.name}`}/> :
          <img src={require(`../assets/lawufapics/roster/${props.name}.jpg`).default}
               alt={`${props.name}`}/>
        }
        <div class="capitalize text-gray-shadow text-center">
          {props.name}
        </div>
    </div>
  )
}
