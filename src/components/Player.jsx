import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function Player(props) {
  const [isFlipped, setFlipped] = useState(false)

  const handleHover = (e) => {
    e.preventDefault()
    setFlipped(!isFlipped)
  }

  return (
    <div onMouseOver={handleHover} onMouseOut={handleHover}>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
      >
        {/* Front of card */}
        <div className="cursor-pointer relative">
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
        <div className="cursor-pointer relative">
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
                filter: 'brightness(40%)',
                transform: 'scaleX(-1)' 
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
                filter: 'brightness(40%)',
                transform: 'scaleX(-1)'
              }}
            />
          }
          <div 
            className="absolute top-4 left-2 text-white py-1 px-3 text-2xl font-semibold"
            style={{ textShadow: '3px 2px #4C1D95' }}
          >
            Alan Sun
          </div>
          <div className="flex flex-row">
            <div 
              className="flex flex-col absolute top-16 left-6 text-white py-1 px-3 text-md font-medium border-l-4 border-purple-400"
            >
              <div className="italic py-2">Nickname:</div> 
              <div className="italic py-2">Year:</div>
              <div className="italic py-2">Position:</div>
              <div className="italic py-2">Hometown:</div>
            </div>
            <div 
              className="flex flex-col absolute top-16 left-32 text-white py-1 px-3 text-md font-medium"
            >
              <div className="py-2">Lasuna</div> 
              <div className="py-2">Junior</div>
              <div className="py-2">Cutter</div>
              <div className="py-2">Hamilton, NJ</div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
}
