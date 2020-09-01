import React from 'react'
// Images
import Atunlo from '../../images/Atunlo.png'
import wireFrames1 from '../../images/wireFrames1.svg'
import wireFrames2 from '../../images/wireFrames2.svg'
import wasteSell1 from '../../images/wasteSell1.svg'
import wasteSell2 from '../../images/wasteSell2.svg'
import highFidelity from '../../images/highFidelity.svg'
import wasteDisposal from '../../images/wasteDisposal.svg'
import wasteDisposal2 from '../../images/wasteDisposal2.svg'
// Components
import Header from '../ProjectComponent/Header'
import Text from '../ProjectComponent/Text'
import '../../css/Projects.css';
function Projects() {
  return (
    <div>
      <Header
        title="Atunlo (A Recycling Firm)"
        list1="User Experience (UX) Designer"
        list2="User Interface (UI) Designer"
        list3="Interaction Designer" />
      <div className="content px-4 md:px-8 lg:px-0">
        <div className="container mx-auto">
          <Text title="Project Overview"
            content={[`Ever lived in an unkempt environment and having to live with piles of dirts, 
            dustbins filled to the brim and the odour it oozes out? Aside the health hazard it poises, 
            it makes living in such an environment really uncomfortable.`, <br />, <br />
            ]}
            content2={`Atunlo is a recycling firm aimed at ensuring you have a clean and safe environment. 
            It seeks to achieve this by creating an avenue for individuals to easily dispose of their dirts, 
            sell out materials/equipment they do not need anymore. It also creates an avenue for organizations 
            and individuals to reach out to non-governmental organizations, motherless babies homes, etc in case 
            they want to donate to them instead.`} />
          <img src={Atunlo} alt="Atunlo banner" />
          <div className="target-users px-4 md:px-8 lg:px-0">
            <h2>Atunlo’s Target Users</h2>
            <ul className="gap-16 pl-8">
              <li>Who? People aged 15-60 living in Lagos State Nigeria. These are people who are old enough to make decisions for themselves and also people who can use smartphones, even if minimally as the Atunlo app is beginner friendly</li>
              <li> What? The app will allow individuals easily dispose off their dirts by letting the firm's truck pick it up from their doorstep or by dropping it off at the nearest dumping site made available by Atunlo</li>
              <li>When? People who need to easily dispose off their dirts without so much hassle.</li>
              <li>How? Atunlo Mobile Application</li>
            </ul>
          </div>

          <Text title="The Hypothesis"
            content={[`The Atunlo app is largely targeted at every individual with a home, 
            who accumulates dirts and contributes to the decision making for the household, 
            no matter how little. These are people who wouldn't want to go through the stress 
            of burning dirts, general compilation at a spot which is hazardous to their health or having to go 
            long distances to dispose them.`, <br />, <br />]}
            content2="Some cities in Lagos State, Nigeria are projected as dirty cities. Atunlo is here to give you a new reputation😊" />
          <Text title="WireFrames"
            content="Based on the user flow generated out of research,, I outlined required features that the app should possess and imagined it visually. The wireframe represents the skeletal framework of the app" />
          <div className="flex flex-wrap justify-between">
            <img src={wireFrames1} alt="wireFrames1" className="m-6" />
            <img src={wireFrames2} alt="wireFrames2" className="m-6" />
          </div>
          <div className="flex-col-reverse lg:flex-row justify-between flex container mx-auto">
            <img src={highFidelity} alt="highFidelity" className="w-full lg:w-9/12" />
            <h1 className="text-4xl text-center lg:m-auto my-8 w-full">Onboarding Screens<span className="yellow text-5xl">.</span></h1>
          </div>
        </div>
        <div className="orange-bg text-center py-16">
          <Text title="Waste Disposal" />
          <div className="container mx-auto">
            <img src={wasteDisposal} alt="Waste Disposal" />
            <img src={wasteDisposal2} alt="Waste Disposal" />
          </div>
        </div>
      </div>
      <div className="container content mx-auto text-center">
        <Text title="Waste Sell Off / Giveaway"
        content="Atunlo creates an avenue for its users to sell off their fairly used prducts or they may choose to give it away to charity organization or Non-Governmental Organisations." />
        <img src={wasteSell1} alt="Waste sell" />
        <Text title="Waste Sell Off / Giveaway"
        content="Atunlo creates an avenue for its users to sell off their fairly used prducts or they may choose to give it away to charity organization or Non-Governmental Organisations." />
        <img src={wasteSell2} alt="Waste sell" />

      </div>

    </div>
  )
}

export default Projects
