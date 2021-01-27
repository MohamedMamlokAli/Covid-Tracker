import React, { useState,useEffect } from 'react';
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import Countries from "./Countries"
import earth from "./Images/planet-earth.svg"
import axios from "axios"
import {gsap} from "gsap"
import { Timeline } from 'gsap/gsap-core';
const Today = () => {
  const [country,setcountry] = useState({iso:123})
  const [flag,setFlag] = useState("")
  const [pick,setPick] = useState(false)
  const handleChange = async(e)=>{
   const countryName = e.target.value
    await axios.get(`https://corona.lmao.ninja/v2/countries/${countryName}?today&strict&query%20`)
    .then(res=>{
      setcountry(res.data)
      setFlag(res.data.countryInfo.flag)
    })
    console.log(country)
  }
  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/all").then(res=>setcountry(res.data))
  }, [])
  useEffect(() => {
   const tl = new Timeline()
   tl.from(".hero-img",{opacity:0,y:-60,duration:1,ease:"linear"})
   .from(".hero-text",{opacity:0,right:100,duration:1},"-=1")
   
  }, [pick])
  useEffect(() => {
    const btn = document.querySelector(".btn")
    btn.addEventListener("click",()=>setPick(!pick))
    return () => {
      btn.removeEventListener("click",()=>setPick(!pick))
    }
  }, [pick])
  useEffect(() => {
       const tl = new Timeline()
    tl.from(".country_info",{opacity:0,y:100,duration:1})
      gsap.from(".stagger",{opacity:0,x:-100,duration:1,stagger:.5})
  gsap.from(".flag-img",{opacity:0,duration:1,width:"50",height:50})

  }, [pick])

  return (
   <section>
     {!pick?<div className="container">
      <div className="row">
        <div className="col hero-text">
         <div  className="resize" >
    <Countries handleChange={handleChange} />
    <a href="#" className="btn bg-info green text-white btn-lg active" role="button" aria-pressed="true">
     Cases
     </a>

   </div>
    </div>
    <div className="col hero-img">
      <img className="homepage-img" src={earth} alt=""/>
      </div>
   </div>
  </div>
:    <div className="container">
  <div className="row">
    <div className="col country-text">
    <a href="#" className="btn goBack bg-info green text-white btn-lg active" role="button" aria-pressed="true">
     Go Back
     </a>
      <p className="stagger">country: {country.country}</p >
      <p className="stagger">Total cases: {country.cases}</p >
      <p className="stagger">New cases: {country.todayCases}</p >
      <p className="stagger">Total deaths: {country.deaths} </p >
      <p className="stagger">New deaths: {country.todayDeaths} </p >
      <p className="stagger">Total recovered {country.recovered} </p >
      <p className="stagger">New recovered: {country.todayRecovered} </p >

    </div>
    <div className="col flag-img">
            <img src={flag} alt=""/>
    </div>
  </div>
    </div>
}
   </section>
  );

};

export default Today
