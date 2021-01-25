import React,{useEffect} from 'react'
import { gsap } from "gsap";
import doc from "./Images/doctor.svg"
const Info = () => {
 useEffect(() => {
  gsap.from(".info",{opacity:0,x:-100,duration:1,stagger:.5})
  gsap.from(".hero-img",{opacity:0,left:100,duration:1})
 }, [])
 return (
  <section>
    <div className="container">
      <div className="row">
        <div className="col info-text">
         <div  className="resize w-100" >
    <p className="info">Wear a mask</p>
    <p className="info">Clean your hands often</p>
    <p className="info">Avoid touching your eyes, nose and mouth</p>
    <p className="info">Avoid close contact with someone who is sick</p>
    <p className="info">Cough or sneeze in your bent elbow - not your hands!</p>
    <p className="info">Limit social gatherings and time spent in crowded places</p>
    <p className="info">Clean and disinfect frequently touched objects and surfaces</p>
   </div>
    </div>
    <div className="col hero-img">
     <img className="homepage-img" src={doc} alt=""/>
      </div>
   </div>
  </div>
   </section>
 )
}

export default Info
