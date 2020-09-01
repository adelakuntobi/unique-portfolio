import React from 'react'
// import label1 from '../../images/Rectangle 596.svg'
function Brandingproject(props) {
  const{title,label1} = props
  return (
    <div className="px=5">
      <figure class="w-full md:w-9/12 lg:w-full px-8  ">
        <img class="ml-0" src={label1} alt={`${title} Brand Identity Design`} />
          <figcaption class="my-6"><b>{title}</b> Brand Identity Design</figcaption>
      </figure>
    </div>
  )
}

export default Brandingproject
