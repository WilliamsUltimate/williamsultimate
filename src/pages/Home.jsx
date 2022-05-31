import '../styles/home.css';
import { Link } from 'react-router-dom';
import wufo from '../assets/wufopics/wufo.png';
import nova from '../assets/novapics/nova.png';
import buf from '../assets/bufpics/buf.png'

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-around">

      {/* WUF text logo */}
      <div className="flex justify-evenly text-wurple font-extrabold font-serif" style={{fontSize: 'calc(0.5em + 2.5vw)'}}>
          WILLIAMS ULTIMATE FRISBEE
      </div>

      {/* WUFO, NOVA, and BUF logo-buttons */}
      <div className="flex flex-col md:flex-row justify-evenly">
        <Link to='/wufo' className="self-center flex-initial w-48 md:w-64">
          <img src={wufo} alt="WUFO"/>
        </Link>
        <Link to='/nova' className="self-center flex-initial w-48 md:w-64">
          <img src={nova} alt="NOVA"/>
        </Link>
        <Link to='/buf' className="self-center flex-initial w-48 md:w-64">
          <img src={buf} alt="BUF"/>
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-evenly font-mono" style={{fontSize: '0.8em'}}>
        Made with 💜 by Alan and Rito
      </div>

    </div>
  )
}
