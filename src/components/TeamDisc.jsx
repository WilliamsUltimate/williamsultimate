import React from 'react';
import wufologo from '../assets/wufopics/wufo.png';
import lawufalogo from '../assets/lawufapics/lawufa.png';

export default function TeamDisc(props) {
  return (
      props.team === 'wufo'
      ? (
        <div
         className="bg-gradient-to-r from-gray-50 to-gray-100 transition-colors duration-500 ease-in-out hover:from-purple-100 hover:to-purple-200 rounded-full flex items-center justify-center text-grey-200 text-2xl font-light font-sans border-2 border-black border-opacity-25"
         style={{ height: '210px', width: '210px' }}
        >
            <img
                className="w-1/2 h-1/2 rounded-full"
                src={wufologo}
                alt={`Click to view ${props.team.toUpperCase()}'s homepage.`}
            />
        </div>
            ) : (props.team === 'lawufa' ?
              <div
                  className="bg-gradient-to-r from-gray-50 to-gray-100 transition-colors duration-500 ease-in-out hover:from-purple-100 hover:to-purple-200 rounded-full flex items-center justify-center text-grey-200 text-2xl font-light font-sans border-2 border-black border-opacity-25"
                  style={{ height: '210px', width: '210px' }}
              >
                  <img
                      className="w-1/2 h-1/2 rounded-full"
                      src={lawufalogo}
                      alt={`Click to view ${props.team.toUpperCase()}'s homepage.`}
                  />
              </div>
                :
                <div
                    className="bg-gradient-to-r from-gray-50 to-gray-100 transition-colors duration-500 ease-in-out hover:from-purple-100 hover:to-purple-200 rounded-full flex items-center justify-center text-grey-200 text-2xl font-light font-sans border-2 border-black border-opacity-25"
                    style={{ height: '210px', width: '210px' }}
                >
                    <img
                        className="w-1/2 h-1/2 rounded-full"
                        src={}
                        alt={`Click to view ${props.team.toUpperCase()}'s homepage.`}
                    />
                </div>
                )
      
  )
}
