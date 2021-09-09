import React from 'react'

export default function TeamLanding(props) {
  return (
    <div className="min-h-screen">
      <div className={`absolute bg-${props.team} bg-cover bg-origin-border bg-fixed h-full w-full`}>
      </div>
      <div className="absolute flex items-center justify-center text-white text-center h-full w-full">
        <h1 className="italic font-medium mb-12" style={{ textShadow: '9px 7px #4C1D95', fontSize: 'calc(8em + 2vw)' }}>
          {props.team === 'lawufa' ? 'La WUFA' : props.team.toUpperCase()}
        </h1>
      </div>
      <div className="absolute text-white right-12 bottom-32">
        <h2 className="italic font-semibold text-4xl ml-4" style={{ textShadow: '4px 3px #4C1D95' }}>
          {props.team === 'wufo' ? 'The best that Williams has to offer.'
            : (props.team === 'lawufa' ? 'La WUF is on fire!' : '')}
        </h2>
      </div>
    </div>
  )
}