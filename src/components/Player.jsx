import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function Player(props) {
  const [isFlipped, setFlipped] = useState(false)

  const handleHover = (e) => {
    e.preventDefault()
    setFlipped(!isFlipped)
  }

  return (
    <div onMouseOver={handleHover} onMouseOut={handleHover} onClick={handleHover}>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
      >
        {/* Front of card */}
        <div className="cursor-pointer relative">
            {props.team === "wufo" ? 
              <img 
                src={require(`../assets/wufopics/roster/${props.first}-${props.last}.jpg`).default}
                alt={`${props.first} ${props.last}`}
                className="rounded"
                style={{ objectFit: "cover", width: "300px", height: "300px" }}
              /> :
              <img 
                src={require(`../assets/novapics/roster/${props.first}-${props.last}.jpg`).default}
                alt={`${props.first} ${props.last}`}
                className="rounded"
                style={{ objectFit: "cover", width: "300px", height: "300px" }}
              />
            }
            <div 
              className="bg-black bg-opacity-50 rounded absolute right-2 bottom-2 text-white py-1 px-3 text-2xl font-semibold"
              style={{ textShadow: '3px 2px #4C1D95' }}
            >
              #{props.number === "" ? "??" : props.number} {props.first}
            </div>
        </div>

        {/* Back of card */}
        <div className="cursor-pointer relative">
          {props.team === "wufo" ? 
            <img 
              src={require(`../assets/wufopics/roster/${props.first}-${props.last}.jpg`).default}
              alt={`${props.first} ${props.last}`}
              className="rounded"
              style={{ 
                objectFit: "cover", 
                width: "300px", 
                height: "300px", 
                opacity: '0.9', 
                filter: 'brightness(40%)',
                transform: 'scaleX(-1)' 
              }}
            /> :
            <img 
              src={require(`../assets/novapics/roster/${props.first}-${props.last}.jpg`).default}
              alt={`${props.first} ${props.last}`}
              className="rounded"
              style={{ 
                objectFit: "cover", 
                width: "300px", 
                height: "300px", 
                opacity: '0.9', 
                filter: 'brightness(40%)',
                transform: 'scaleX(-1)'
              }}
            />
          }
          <div 
            className="absolute top-4 left-2 text-white py-1 px-3 text-2xl font-semibold"
            style={{ textShadow: '3px 2px #4C1D95' }}
          >
            {props.first} {props.last} {props.isCaptain ? <span className="italic text-base font-medium">Captain</span> : ''}
          </div>
          <div className="flex flex-row">
            <div 
              className="flex flex-col absolute top-16 left-6 text-white py-1 px-3 text-md font-medium border-l-4 border-purple-400"
            >
              <div className="italic py-2">Nickname:</div> 
              <div className="italic py-2">Pronouns:</div>
              <div className="italic py-2">Year:</div>
              <div className="italic py-2">Position:</div>
              <div className="italic py-2">Hometown:</div>
            </div>
            <div 
              className="flex flex-col absolute top-16 left-32 text-white py-1 px-3 text-md font-medium"
            >
              <div className="py-2">{props.nickname}</div> 
              <div className="py-2">{props.pronouns}</div>
              <div className="py-2">{props.year}</div>
              <div className="py-2">{props.position}</div>
              <div className="py-2">{props.hometown}</div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
}
