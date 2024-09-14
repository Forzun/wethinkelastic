import React, { useRef } from 'react'
import Nav from './components/Nav'
import Hello from './components/Hello'
import Scalevideo from './components/Scalevideo'
import Page3 from './components/page3'
import { useGSAP } from '@gsap/react'
import Page4 from './components/page4'
import Page5 from "./components/Page5"
import Page6 from './components/Page6'
import Project from './components/Project'
import Expetises from './components/Expetises'
import Spponsor from './components/Sponsor'
import LocomotiveScroll from 'locomotive-scroll';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import Logos from './components/Logos'; 
import Footer from './components/Footer';

const locomotiveScroll = new LocomotiveScroll();

function App() {

  return (
    <div className='w-full bg-[#151414] h-screen text-white '>
      <RemoveScrollBar />
        <Hello/>
        <Scalevideo/>
        <Page3 />
        <Page4 />
        <Page5/>
        <Page6 />
        <Project/>
        <Expetises/>
        <Spponsor/>
        <Logos/>
        <Footer/>
    </div>
  )
}

export default App