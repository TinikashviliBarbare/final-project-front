import React from 'react'
import "../css/style.scss";
import img from '../assets/firstphone.png'

function Main() {
  return (
    <div className='slide-show'>
      <img className='first-img' src={img} alt="" />
      <div className="img-info">
        <p className='text'>NOW IN OBSIDIAN</p>
        <h2>Time for the </h2>
        <p className='text-change'>next level?</p>
        <p className='price'>From $899</p>
        <button className='buy'>BUY</button>
      </div>
    </div>
  )
}

export default Main