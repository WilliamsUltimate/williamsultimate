import React from 'react';
import { wufoEvents } from '../assets/wufo-events';
import { novaEvents } from '../assets/nova-events';

export default function Events(props) {

  return (
    <div class="flex flex-col bg-white rounded-md" style={{ height: "600px", flexBasis: "500px" }}>
      <div className="px-4 py-3 text-2xl font-light" style={{ color: "#2B2F33", borderBottom: "1px solid #E3E7ED" }}>
        Upcoming Events
      </div>
      {props.team === "wufo" ?
        wufoEvents.map(event =>
          event.link === "" ? 
            <div className="px-4 py-5 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" style={{ borderBottom: "1px solid #e3e7ed" }}>
            {event.date}: {event.name}
            </div>
          : <a href={event.link} className="px-4 py-5 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" style={{ borderBottom: "1px solid #e3e7ed" }}>
              {event.date}: {event.name}
            </a>
        )
      : novaEvents.map(event =>
        event.link === "" ? 
          <div className="px-4 py-5 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" style={{ borderBottom: "1px solid #e3e7ed" }}>
          {event.date}: {event.name}
          </div>
        : <a href={event.link} className="px-4 py-5 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" style={{ borderBottom: "1px solid #e3e7ed" }}>
            {event.date}: {event.name}
          </a>
      )}
    </div>
  )
}
