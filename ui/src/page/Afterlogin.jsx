import React from 'react'
import {link} from 'react-router-dom'
import "./afterlogin.css"
 import Filter from '../components/Filter';
 import Footer from '../components/Footer';
export default function Afterlogin(){
  return (
    <div class="conatiner">
    <div className="username ">Username : Rishabh</div>
    <Filter />
    <Footer/>
    </div>
  )
}



