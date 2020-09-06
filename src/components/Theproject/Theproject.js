import React from 'react'
import src1 from '../../images/Rectangle 596.svg'
import src2 from '../../images/Rectangle 597.svg'
import workyy from '../../images/Rectangle 593 (2).png'
import breweries from '../../images/Rectangle 593 (1).png'
import atunloimg from '../../images/Rectangle 593.png'
import Projectsample from '../Landingpage/Projectsample'
import Brandingproject from '../Landingpage/Brandingproject'

function Theproject() {
  return (
    <div>
            <div id="the-projects">
        <h2 className="text-center text-3xl pt-20 pb-5">My Projects<span class="yellow">&#x25AA; </span></h2>
        <div className="container-fluid bg-gray py-6">
          <h5 className="text-center py-12 text-xl">UI/UX Projects</h5>
          <div>
            <div className="container mx-auto w-11/12 sm:w-8/12 md:w-6/12 lg:w-10/12">
              <Projectsample 
              heading="WorkyCappy Bank" 
              explaination="A Bank that aids businesses and firms efficiently and effectively manage their working capital"
              link="workycappy"
              project1={workyy}
               />
              <Projectsample position="flex-row-reverse" heading="Atunlo (A Recycling App)" 
              explaination="Atunlo helps ensure you do not worry about waste disposal and grants you access to purchase 
              fairly used products too."
              project1={atunloimg}
              link="atunlo"/>
              <Projectsample heading="The Nigerian Breweries PLC (Redesign)" 
              explaination="Nigerian Breweries PLC is the pioneer and biggest brewing company in Nigeria"
              link="breweries"
              project1={breweries}
              />
            </div>
          </div>
        </div>
        <h5 class="text-center py-8 text-xl">Branding Projects</h5>
        <div className="container mx-auto justify-between block lg:flex">
          <Brandingproject title="PayPorte" label1={src1} link="payport"/>
          <Brandingproject title="The Child" label1={src2} link="thechild"/>
        </div>
      </div>
    </div>
  )
}

export default Theproject
