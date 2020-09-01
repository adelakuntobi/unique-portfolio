import React from 'react'
import project1 from '../../images/Rectangle 593 (2).png'
import { Link } from 'react-router-dom'

// var project2 = require('../../images/Rectangle 593.png');
function Projectsample(props) {
  const {heading,explaination,position} = props
  return (
    <div>
      <div className={`${position} text-white block lg:flex pb-16 gap-x-16`}>
        <img src={project1} alt="project img" className="w-full lg:w-7/12 p-0" />
        <div className="mt-0 mb-auto background-blue p-8">
          <h5 className="text-2xl">{heading}</h5>
          <h6 className="py-4">UI + UX</h6>
          <p>{explaination}</p>
          <Link to="/workycappy">
          <button className="yellow-bg px-8 py-2 text-black font-bold mt-8 mb-4">Take a Look</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projectsample
