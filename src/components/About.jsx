import React from 'react';

export default function About(props) {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col place-items-center place-content-center bg-black">
      <h1 className="text-4xl text-gray-200 font-semibold">About</h1>
      <div className="mt-8 w-5/6 md:w-2/5 flex flex-col border-4 border-purple-400 p-8">
        <p className="text-gray-200 text-xs md:text-lg font-medium">
          {props.team === 'wufo' ? 
            "WUFO is Williams College’s ultimate frisbee team for male and gender non-conforming students. We've been a student organization at Williams since 1977, and currently compete at the USAU DIII level. Recruiting takes place in the fall and we encourage those of any skill level to come try out — the vast majority of WUFO members had no ultimate experience before their first practice!" 
            : (props.team === 'nova' ?
            "Frisbee? Fun? Friends? We’ve got it all! NOVA is Williams College’s ultimate frisbee team for female and non-binary students. In the fall, we welcome new team members, learn the beautiful game of Ultimate, and casually practice for our Spring season competing nationally at the USAU (USA Ultimate) DIII level. Interested in joining NOVA? No experience necessary! Hope to see you soon out on the sunny, grassy fields of Poker Flats!"
            : "BUF (aka B-team, aka the Narwhals, aka the Williams Chipotle Club) is WUF's low-commitment, high-fun, mixed (or all-gender) team. Unlike the A-teams, we do not hold tryouts, and all of our events are always open to everyone! We are a great option for people who love playing ultimate, and want to keep practicing and getting better, but don't necessarily want to make such an intense time commitment as those hardos on the A-teams. We are also a great option for people who didn't make the A-team, but still want to be part of the organization in some (super fun) way. In a normal year, we hold practices about twice a week, and attend a few (incredibly fun and chill) daylong tournaments on weekends. These days we've also been solving zoom crossword puzzles, and playing lots of highly competitive skribbl. We can't wait to get back to campus and meet a new cohort of freshmen narwhals!"
            )
          }
        </p>
        {props.team !== 'buf' &&
          <div className="mt-4 mb-1" style={{ position: "relative", overflow: "hidden", width: "100%", paddingTop: "56.25%" }}>
            <iframe
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              src={props.team === 'wufo' ? "https://www.youtube.com/embed/o0zNmlRKwxM" : "https://www.youtube.com/embed/aXW7eBiPq_s"} 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen 
            />
          </div>
        }
      </div>
    </div>
  )
}
