import React from 'react';

export default function Events(props) {

  return (
    <div class="flex flex-col place-items-center">
      <div className="text-3xl mb-4" style={{color: "#4C1D95"}}>
        Upcoming Events
      </div>
      <div className="flex-row text-l">
          <a href="#_" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
            Sep 9 (Thurs): Purple Key Fair 💜🔑🎡
          </a>
      </div>
      <a href="#_" className="flex-grow items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
        Sep 13 (Mon): First day of open practice
      </a>
      <a href="#_" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
        Dec 17-20: D3 Nationals babyyyy
      </a>
    </div>
  )
}
