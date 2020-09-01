import React from 'react'


function Header(props) {
  const { title, list1, list2, list3 } = props
  return (
    <div className="background-blue">
      <div className="header container mx-auto text-center pt-24 pb-48 text-white">
        <h1 className="text-4xl lg:text-3xl pb-10">{title}<span className="yellow font-extrabold ">&#x25AA; </span></h1>
        <p className="yellow py-8 uppercase font-bold">Roles I played</p>
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
