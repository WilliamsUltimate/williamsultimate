import React from 'react';

export default function About(props) {
  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <div className="mt-16 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-gray-200 font-semibold">About</h1>
        <div className="mt-20 w-2/5 flex flex-col justify-center items-center border-4 border-purple-400 p-8">
          <p className="text-gray-200 text-lg font-medium">
            {props.team === 'wufo' ? 
              "WUFO is Williams College’s ultimate frisbee team for male and gender non-conforming students. We've been a student organization at Williams since 1977, and currently compete at the USAU DIII level. Recruiting takes place in the fall and we encourage those of any skill level to come try out — the vast majority of WUFO members had no ultimate experience before their first practice!" 
              :
              "Frisbee? Fun? Friends? We’ve got it all! La WUFA is Williams College’s ultimate frisbee team for female and non-binary students. In the fall, we welcome new team members, learn the beautiful game of Ultimate, and casually practice for our Spring season competing nationally at the USAU (USA Ultimate) DIII level. Interested in joining WUFA? No experience necessary! Hope to see you soon out on the sunny, grassy fields of Poker Flats!"
            }
          </p>
          <div className="mt-4 mb-1">
            <iframe
              width="600" 
              height="330" 
              src={props.team === 'wufo' ? "https://www.youtube.com/embed/o0zNmlRKwxM" : "https://www.youtube.com/embed/aXW7eBiPq_s"} 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen 
            />
          </div>
        </div>
      </div>
    </div>
  )
}