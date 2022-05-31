import '../styles/home.css';
import { Link } from 'react-router-dom';
import wufo from '../assets/wufopics/wufo.png';
import nova from '../assets/novapics/nova.png';
import buf from '../assets/bufpics/buf.png';
import charlie from '../assets/wufopics/charlie-sky.jpg';
import annika from '../assets/novapics/annika-sky.JPG';
import dog from '../assets/bufpics/dog.jpg';

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-around">

      {/* WUF text logo */}
      <div className="flex justify-evenly text-wurple font-extrabold font-serif" style={{fontSize: 'calc(0.5em + 2.5vw)'}}>
          WILLIAMS ULTIMATE FRISBEE
      </div>

      {/* WUFO, NOVA, and BUF logo-buttons */}
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-4">
        <div className="md:relative self-center flex-initial md:w-64">
          <Link to='/wufo' className="group">
            <img src={charlie} alt="Charlie (#8) skying an opponent" className="hidden md:flex group-hover:opacity-60 transition-opacity"/>
            <img src={wufo} alt="WUFO" className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-24"/>
          </Link>
        </div>
        <div className="md:relative self-center flex-initial md:w-64">
          <Link to='/nova' className="group">
            <img src={annika} alt="Annika (#0) skying an opponent" className="hidden md:flex group-hover:opacity-60 transition-opacity"/>
            <img src={nova} alt="NOVA" className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-24"/>
          </Link>
        </div>
        <div className="md:relative self-center flex-initial md:w-64">
          <Link to='/buf' className="group">
            <img src={dog} alt="Dog with a frisbee in its mouth" className="hidden md:flex group-hover:opacity-60 transition-opacity"/>
            <img src={buf} alt="BUF" className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-24"/>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-evenly font-mono" style={{fontSize: '0.8em'}}>
        Made with 💜 by Alan and Rito
      </div>

    </div>
  )
}
