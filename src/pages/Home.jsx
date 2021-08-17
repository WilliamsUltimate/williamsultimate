import React from 'react';
import '../styles/disc.css';
import '../styles/home.css';
import TeamDisc from '../components/TeamDisc'

export default function Home() {
    return (
        <div>
            <div class="background"></div>
            <div className="flex flex-row justify-between p-4 fixed w-full text-gray-500">
                <div className="bg-white p-2 shadow-drop text-gray-shadow">
                    Williams College Ultimate
                </div>
                <div
                    className="flex flex-row justify-between"
                    style={{width: '15%'}}
                >
                    <button className="bg-white p-2 shadow-drop text-gray-shadow transition hover:bg-purple-200 duration-125 ease-in-out">
                        WUFO
                    </button>
                    <button className="bg-white p-2 shadow-drop text-gray-shadow transition hover:bg-purple-200 duration-125 ease-in-out">
                        La WUFA
                    </button>
                    <button className="bg-white p-2 shadow-drop text-gray-shadow transition hover:bg-purple-200 duration-125 ease-in-out">
                        BUF
                    </button>
                </div>
            </div>
            <div
                className="fixed pt-16"
                style={{left: '50%', transform: 'translateX(-50%)'}}
            >
                <h1 className="bg-white p-2 shadow-drop text-2xl text-gray-shadow">
                    Catch a disc!
                </h1>
            </div>
            <div class="x disc">
                <div class="y disc">
                    <TeamDisc team="wufo" />
                </div>
            </div>
            <div class="lawufa-x disc">
                <div class="lawufa-y disc">
                    <TeamDisc team="lawufa" />
                </div>
            </div>
            <div class="buf-x disc">
                <div class="buf-y disc">
                    <TeamDisc team="buf" />
                </div>
            </div>
        </div>
    )
}
