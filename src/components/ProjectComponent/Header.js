import React from 'react'


function Header(props) {
  const { title,role, list1, list2, list3 } = props
  return (
    <div className="background-blue">
      <div className="header container mx-auto text-center px-4 pt-16 lg:pt-24 pb-24 lg:pb-48 text-white">
        <h1 className="text-4xl lg:text-3xl pb-6 lg:pb-10">{title}<span className="yellow px-1 font-extrabold ">&#x25AA; </span></h1>
        <p className="yellow py-8 uppercase font-bold">{role}</p>
        <ul className="inline-flex flex-col gap-3 lg:flex-row lg:flex justify-around">
          <li className="">{list1}</li>
          <li className="">{list2}</li>
          <li className="">{list3}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
