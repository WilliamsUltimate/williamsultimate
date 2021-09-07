import React from 'react';
import { wufoEvents } from '../assets/wufo-events';

export default function Events(props) {

  return (
    <div class="flex flex-col bg-white rounded-md" style={{ width: "400px", height: "600px" }}>
      <div className="px-4 py-2 text-3xl" style={{ color: "#4C1D95" }}>
        Upcoming Events
      </div>
      {props.team === "wufo" ?
        wufoEvents.map(event => 
          <a href={event.link} className="px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
          {event.date}: {event.name}
          </a>
        )
      : wufoEvents.map(event => 
          <a href={event.link} className="px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
            {event.date}: {event.name}
          </a>
      )}
    </div>
  )
}
