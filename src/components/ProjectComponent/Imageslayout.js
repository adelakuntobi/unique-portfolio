import React from 'react'



function Imageslayout(props) {
  const { link,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8, dalt1,dalt2,dalt3,dalt4,dalt5,dalt6,dalt7,dalt8} = props
  return (
    <div className="w-full lg:w-9/12 mx-auto p-6">
      <img className="w-full my-6" src={loc1} alt={dalt1} />
      <img className="w-full my-6" src={loc2} alt={dalt2} />
      <img className="w-full my-6" src={loc3} alt={dalt3} />
      <img className="w-full my-6" src={loc4} alt={dalt4} />
      <img className="w-full my-6" src={loc5} alt={dalt5} />
      <img className="w-full my-6" src={loc6} alt={dalt6} />
      <img className="w-full my-6" src={loc7} alt={dalt7} />
      <img className="w-full my-6" src={loc8} alt={dalt8} />
      <a target="_blank" rel="noopener noreferrer" className="font-bold cursor-pointer" href={link}> View Full Case Study on Behance</a>
    </div>
  )
}

export default Imageslayout
