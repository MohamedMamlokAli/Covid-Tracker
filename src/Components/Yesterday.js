import React, { useState,useEffect } from 'react';
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import Countries from "./Countries"
import earth from "./Images/planet-earth.svg"
import { gsap } from "gsap";

const Yesterday = () => {

  const [ value, setValue ] = useState(null);
  const handleChange =(e)=>{
   setValue(e.target.value);
   console.log(value);
  }
  useEffect(() => {
   if(value){
    fetch(`https://corona.lmao.ninja/v2/countries/${value}?today&strict&query%20`).then(data=>console.log(data))
   }
  }, [value])
  useEffect(() => {
   gsap.from(".hero-img",{opacity:0,y:-60,duration:1,ease:"linear"})
   gsap.from(".hero-text",{opacity:0,right:100,duration:1})
   
  }, [])

  return (
   <section>
    <div className="container">
      <div className="row">
        <div className="col hero-text">
         <div  className="resize" >
    <Countries handleChange={handleChange} />
        <a href="/cases-yesterday" className="btn bg-info green text-white btn-lg active" role="button" aria-pressed="true">
     Cases
     </a>

   </div>
    </div>
    <div className="col hero-img">
      <img className="homepage-img" src={earth} alt=""/>

      </div>
   </div>
   
  </div>

   </section>
  );

};

export default Yesterday
