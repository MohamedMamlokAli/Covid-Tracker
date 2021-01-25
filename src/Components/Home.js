import React, { useEffect } from 'react'
import faceMask from "./Images/facemask.svg"
import woman from "./Images/woman.svg"
import { gsap } from "gsap";

const Home = () => {
  useEffect(()=>{
  gsap.to(".fmask",{opacity:1,y:-60,duration:1,ease:"power1"})
  gsap.from(".hero-text",{opacity:0,right:100,duration:1})
  gsap.from(".btn",{duration:1,opacity:0,y:100})
  },[])
 return (
  <div className="container">
   <div className="row">
    <div className="col hero-text">
     <h1 className="animate-text">Masks save lifes </h1>
     <p className="animate-text">Experts say if 95 percent of people wore a face mask,
       it could save nearly 130,000 lives between now and March 1st.</p>
<a href="/info" className="btn bg-info green text-white btn-lg active" role="button" aria-pressed="true">Learn how to stay safe</a>
    </div>
    <div className="col hero-img">
      <img className="homepage-img" src={woman} alt=""/>
      <img className="homepage-img fmask noBG" src={faceMask} alt=""/>

      </div>
   </div>
   
  </div>
 )
}

export default Home
