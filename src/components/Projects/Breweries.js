import React from 'react'
import Header from '../ProjectComponent/Header'
import Text from '../ProjectComponent/Text'
import banner from '../../images/breweries.png'
import '../../css/Projects.css';

function Breweries() {
  return (
    <div>
      <Header
        title="Nigerian Breweries Website (Redesign)"
        role="Roles I played"
        list1="User Experience (UX) Designer"
        list2="User Interface (UI) Designer"
        list3="Interaction Designer" />
      <div className="content container mx-auto px-4 md:px-8 lg:px-0">
        <Text title="Project Overview"
          content={[<i><b className="the-ps">PS: This isn’t an officially approved Redesign but a fun project. 
          I felt the need to so i proceeded with doing it.</b>,</i>, <br />, <br />, `Nigerian Breweries PLC is the 
          pioneer and biggest brewing company in Nigeria. It serves the Nigerian market and 
          exports to other parts of West Africa. The goal was to create a unique solution focusmg on 
          2 (two) key features`, <br />, <br />, `- Amazing User Interface: As a platform with a focus on serving its users, 
          I worked around ensuring that the new interface captures all necessary possible user movements 
          whule still being simple and aesthetically pleasing.`, <br />, <br />, `- Improved Functionality: With reference 
          with the existing interface, it was difficult to really understand what the platform was all 
          about especially for a first time user who does not know much about Nigerian Breweries. 
          I ensured i broke down all essential features so it becomes clearer what the firm’s core 
          objectives truly are.`]} key="3"
        />
        <img className="w-full" src={banner} alt="The banner" />
        <Text title="The Challenge"
          content="The actual focus for this project was to ensure i give the website a feel not different from what the already existing platform had. It would be more like modfying the looks without loosing the feel. I worked in this direction firstly by sticking to the brand colors and fonts. Also, I focused on modifying the already existing pages to ensure the feel drives home the firm’s intended point." />
        <Text title="The Solution"
          content="Based on the existing interface, I outlined required features that the app should possess and imagined it visually." />

        <a target="_blank" rel="noopener noreferrer" className="font-extrabold" href="https://youtu.be/ztB-bR5wCw4">View Prototype Here</a>
      </div>
    </div>
  )
}

export default Breweries
