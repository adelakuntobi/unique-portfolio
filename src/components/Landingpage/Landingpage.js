import React from 'react'
import Projectsample from './Projectsample'
import Brandingproject from './Brandingproject'
import headerimage from '../../images/header__image.svg'
import src1 from '../../images/Rectangle 596.svg'
import src2 from '../../images/Rectangle 597.svg'

function Landingpage() {
  return (
    <div className="">
      <div className="header-content container-fluid py-12 background-blue text-white">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row">
          <div className="my-auto w-full lg:w-6/12 px-8">
            <p className="uppercase font-bold"><span className="yellow">Hello,</span> I'm Ifeoma Ukandu</p>
            <h1 className="text-4xl">Creative Designer</h1>
            <p>I’m a seasoned creative designer with experience in the management of the complete design
            process from conceptualization to delivery. An expert at interdepartmental coordination and
            communication, able to stretch the boundaries of digital storytelling to create products that
            meet people’s needs.</p>
            <div className="flex justify-between py-6 gap-5 flex-wrap">
              <button className="lg:px-8 px-5 py-2 text-black font-bold yellow-bg">Currently Open to Opportunities</button>
              <button className="px-8 py-2 border">Get CV</button>
            </div>
          </div>
          <img className="w-10/12 my-4 mx-auto lg:w-5/12 lg:ml-auto lg:my-0" src={headerimage} alt="header" />
        </div>
      </div>
      <div>
        <h2 class="text-center text-3xl pt-20 pb-5">My Projects<span class="yellow">&#x25AA; </span></h2>
        <div className="container-fluid bg-gray py-6">
          <h5 class="text-center py-12 text-xl">UI/UX Projects</h5>
          <div>
            <div className="container mx-auto w-10/12">
              <Projectsample heading="WorkyCappy Bank" explaination="A Bank that aids businesses and firms efficiently and effectively manage their working capital" />
              <Projectsample position="flex-row-reverse" heading="Atunlo (A Recycling App)" explaination="Atunlo helps ensure you do not worry about waste disposal and grants you access to purchase fairly used products too."/>
              <Projectsample heading="The Nigerian Breweries PLC (Redesign)" explaination="Nigerian Breweries PLC is the pioneer and biggest brewing company in Nigeria"/>
            </div>
          </div>
        </div>
        <h5 class="text-center py-8 text-xl">Branding Projects</h5>
        <div className="container mx-auto justify-between block lg:flex">
          <Brandingproject title="PayPorte" label1={src1}/>
          <Brandingproject title="The Child" label1={src2}/>
        </div>
      </div>
    </div>
  )
}

export default Landingpage
