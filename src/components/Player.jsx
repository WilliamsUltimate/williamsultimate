import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function Player(props) {
  const [isFlipped, setFlipped] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      {/* Front of card */}
      <div className="cursor-pointer relative" onClick={handleClick}>
          {props.team === "wufo" ? 
            <img 
              src={require(`../assets/wufopics/roster/${props.name}.jpg`).default}
              alt={`${props.name}`}
              className="rounded"
              style={{ objectFit: "cover", width: "300px", height: "300px" }}
            /> :
            <img 
              src={require(`../assets/lawufapics/roster/${props.name}.jpg`).default}
              alt={`${props.name}`}
              className="rounded"
              style={{ objectFit: "cover", width: "300px", height: "300px" }}
            />
          }
          <div 
            className="bg-black bg-opacity-50 rounded absolute right-2 bottom-2 text-white py-1 px-3 text-2xl font-semibold"
            style={{ textShadow: '3px 2px #4C1D95' }}
          >
            #77 Alan
          </div>
      </div>

      {/* Back of card */}
      <div className="cursor-pointer relative" onClick={handleClick}>
        {props.team === "wufo" ? 
          <img 
            src={require(`../assets/wufopics/roster/${props.name}.jpg`).default}
            alt={`${props.name}`}
            className="rounded"
            style={{ 
              objectFit: "cover", 
              width: "300px", 
              height: "300px", 
              opacity: '0.9', 
              filter: 'brightness(40%)' 
            }}
          /> :
          <img 
            src={require(`../assets/lawufapics/roster/${props.name}.jpg`).default}
            alt={`${props.name}`}
            className="rounded"
            style={{ 
              objectFit: "cover", 
              width: "300px", 
              height: "300px", 
              opacity: '0.9', 
              filter: 'brightness(40%)' 
            }}
          />
        }
        <div 
          className="absolute top-4 left-2 text-white py-1 px-3 text-2xl font-semibold"
          style={{ textShadow: '3px 2px #4C1D95' }}
        >
          Alan Sun
        </div>
        <div 
          className="absolute top-16 left-8 text-white py-1 px-3 text-md font-medium border-l-4 border-purple-400"
        >
          <span className="italic">Nickname:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lasuna
        </div>
        <div 
          className="absolute top-24 left-8 text-white py-1 px-3 text-md font-medium border-l-4 border-purple-400"
        >
          <span className="italic">Year:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Junior
        </div>
        <div 
          className="absolute top-32 left-8 text-white py-1 px-3 text-md font-medium border-l-4 border-purple-400"
        >
          <span className="italic">Position:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cutter
        </div>
        <div 
          className="absolute top-40 left-8 text-white py-1 px-3 text-md font-medium border-l-4 border-purple-400"
        >
          <span className="italic">Hometown:</span> &nbsp;&nbsp;&nbsp;&nbsp; Hamilton, NJ
        </div>
      </div>
    </ReactCardFlip>
  )
}
