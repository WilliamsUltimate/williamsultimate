import React from 'react';

export default function About(props) {
  return (
    <div className="min-h-screen overflow-hidden bg-gray-900">
      <div className="mt-16 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white font-semibold">About</h1>
        <div className="mt-20 w-2/5 flex flex-col justify-center items-center">
          <p className="text-white text-lg font-medium">
            WUFO is Williams College’s ultimate frisbee team for male and gender non-conforming students. We've been 
            a student organization at Williams since 1977, and currently compete at the USAU DIII level. Recruiting 
            takes place in the fall and we encourage those of any skill level to come try out — the vast majority of 
            WUFO members had no ultimate experience before their first practice!
          </p>
          <div className="mt-4 bg-gray-100 rounded p-4">
            <iframe 
              width="650" 
              height="390" 
              src="https://www.youtube.com/embed/o0zNmlRKwxM" 
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