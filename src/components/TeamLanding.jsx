import React from 'react'
import { team } from '../assets/wufopics/team.JPG'

export default function TeamLanding() {
  return (
    <div className="min-h-screen">
      <div 
        className="absolute bg-wufo bg-cover bg-origin-border h-full w-full" 
        style={{ opacity: '0.8', filter: 'brightness(75%) saturate(120%)' }}>
      </div>
      <div className="absolute text-white text-center h-full w-full top-24">
        <h1 className="italic font-medium" style={{ textShadow: '9px 7px #4C1D95', fontSize: 'calc(8em + 2vw)' }}>WUFO</h1>
      </div>
      <div className="absolute text-white right-20 bottom-40">
        <h2 className="italic font-semibold text-4xl" style={{ textShadow: '3px 3px #4C1D95' }}>The best that Williams has to offer.</h2>
      </div>
    </div>
  )
}