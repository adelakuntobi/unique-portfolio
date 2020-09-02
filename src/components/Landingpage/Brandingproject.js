import React from 'react'
import { Link } from 'react-router-dom'
// import label1 from '../../images/Rectangle 596.svg'
function Brandingproject(props) {
  const { title, label1,link } = props
  return (
    <div className="px=5">
      <Link to={"/projects/"+link}>
      <figure class="w-full md:w-9/12 lg:w-full px-8  ">
        <img class="ml-0" src={label1} alt={`${title} Brand Identity Design`} />
        <figcaption class="my-6"><b>{title}</b> Brand Identity Design</figcaption>
      </figure>
      </Link>
    </div >
  )
}

export default Brandingproject
