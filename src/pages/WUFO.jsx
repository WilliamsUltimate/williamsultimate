import React, { useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function WUFO() {
  const titleRef = useRef()

  const handleBackClick = useEffect(() => {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div>
      <button onClick={handleBackClick} />
    </div>
  )
}