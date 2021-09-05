import React from 'react';

export default function Events(props) {

  return (
    <div class="flex flex-col bg-white rounded-md">
      <div className="px-4 py-2 text-3xl" style={{color: "#4C1D95"}}>
        Upcoming Events
      </div>
      <a href="#_" className="px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
        Sep 9 (Thurs): Purple Key Fair 💜🔑🎡
      </a>
      <a href="#_" className="px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
        Sep 13 (Mon): First day of open practice
      </a>
      <a href="#_" class="px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
        Dec 17-20: D3 Nationals babyyyy
      </a>
    </div>
  )
}
