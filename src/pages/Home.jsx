import '../styles/home.css';
import { Link } from 'react-router-dom';
import wufo from '../assets/wufopics/wufo.png';
import nova from '../assets/novapics/nova.png';
import charlie from '../assets/wufopics/charlie-square.jpg';
import annika from '../assets/novapics/annika-square.JPG';

export default function Home() {
  return (
    <div className="flex flex-col max-h-screen">

      {/* Title */}
      <div className="flex justify-center text-2xl sm:text-4xl md:text-5xl text-wurple font-bold font-serif m-5 md:m-10">
        WILLIAMS ULTIMATE
      </div>

      <div className="flex flex-col md:flex-row overflow-hidden">

        {/* WUFO */}
        <div className="relative md:w-1/2 overflow-hidden group">
          <Link to='/wufo'>
            <img  src={charlie}
                  alt="WUFO background image"
                  className="w-screen filter brightness-60 opacity-80 group-hover:opacity-60 transition-opacity"
            />
            <img  src={wufo}
                  alt="WUFO logo"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-36"
            />
          </Link>
        </div>

        {/* NOVA */}
        <div className="relative md:w-1/2 overflow-hidden group">
          <Link to='/nova'>
            <img  src={annika}
                  alt="NOVA background image"
                  className="w-screen filter brightness-60 opacity-80 group-hover:opacity-60 transition-opacity"
            />
            <img  src={nova}
                  alt="NOVA logo"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-36"
            />
          </Link>
        </div>

      </div>
    </div>
  )
}
