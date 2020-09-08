import React from 'react'
import child1 from '../../images/child1.svg'
import child2 from '../../images/child2.svg'
import child3 from '../../images/child3.svg'
import child4 from '../../images/child4.svg'
import child5 from '../../images/child5.svg'
import child6 from '../../images/child6.svg'
import child7 from '../../images/child7.svg'
import child8 from '../../images/child8.svg'
// Components
import Header from '../ProjectComponent/Header'
import Imageslayout from '../ProjectComponent/Imageslayout'
import '../../css/Brand.css'

function Thechild() {
  return (
    <div className="brand">
      <Header
        title="The Child Brand Manual"
        role="Roles I played"
        list1="Graphics Designer"
        list2="Content Writer" />
      <Imageslayout
        loc1={child1} dalt1="The child"
        loc2={child2} dalt2="The child"
        loc3={child3} dalt3="The child"
        loc4={child4} dalt4="The child"
        loc5={child5} dalt5="The child"
        loc6={child6} dalt6="The child"
        loc7={child7} dalt7="The child"
        loc8={child8} dalt8="The child"
        link='https://www.behance.net/gallery/93728773/The-Child-Brand-Manual'
      />
    </div>
  )
}

export default Thechild
