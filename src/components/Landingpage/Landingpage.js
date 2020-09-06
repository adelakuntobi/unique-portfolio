import React from 'react'

import headerimage from '../../images/header__image.svg'

import { NavLink } from 'react-router-dom'
import Theproject from '../Theproject/Theproject'
// import { Switch, Route } from 'react-router-dom'
// import Workcappy from '../Projects/Workcappy'
// import Projects from '../Projects/Atunlo'

function Landingpage() {
  return (
    <div className="">

      <div className="header-content container-fluid py-0 lg:py-12 background-blue text-white">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row">
          <div className="my-auto w-full lg:w-6/12 px-8">
            <p className="uppercase font-semibold"><span className="yellow">Hello,</span> I'm Ifeoma Ukandu</p>
            <h1 className="text-3xl md:text-5xl pb-6 pt-2">Creative Designer</h1>
            <p className="pb-12 ">I’m a seasoned creative designer with experience in the management of the complete design
            process from conceptualization to delivery. An expert at interdepartmental coordination and
            communication, able to stretch the boundaries of digital storytelling to create products that
            meet people’s needs.</p>
            <div className="flex justify-between py-6 flex-wrap flex-col lg:flex-row">
            <button className="w-full md:w-7/12 lg:w-7/12 my-2 lg:my-0 py-2 text-black font-bold yellow-bg">
              <NavLink activeClassName="active" to="/contact">Currently Open to Opportunities </NavLink></button>
              {/* <button className="w-full md:w-7/12 lg:w-7/12 my-2 lg:my-0 py-2 text-black font-bold yellow-bg">Currently Open to Opportunities */}
              <button className="w-full md:w-7/12 lg:w-4/12 my-2 lg:my-0 py-2 border">Get CV</button>
            </div>
          </div>
          <img className="w-8/12 my-6 mx-auto lg:w-5/12 lg:ml-auto lg:my-0" src={headerimage} alt="header" />
        </div>
      </div>
      <Theproject />
    </div>
  )
}

export default Landingpage
