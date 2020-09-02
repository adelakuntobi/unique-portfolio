import React from 'react'
import Imageslayout from '../ProjectComponent/Imageslayout'
import payport1 from '../../images/payport1.svg'
import payport2 from '../../images/payport2.svg'
import payport3 from '../../images/payport3.svg'
import payport4 from '../../images/payport4.svg'
import payport5 from '../../images/payport5.svg'
import payport6 from '../../images/payport6.svg'
import payport7 from '../../images/payport7.svg'
import payport8 from '../../images/payport8.svg'
import Header from '../ProjectComponent/Header'
import '../../css/Brand.css'

function Payport() {
  return (
    <div className="brand">
      <Header 
      title="Payport Brand Manual"
      role="Roles I played"
      list1="Graphics Designer"
      list2="Content Writer"/>
      <Imageslayout 
      loc1={payport1} dalt1="payport"
      loc2={payport2} dalt2="payport"
      loc3={payport3} dalt3="payport"
      loc4={payport4} dalt4="payport"
      loc5={payport5} dalt5="payport"
      loc6={payport6} dalt6="payport"
      loc7={payport7} dalt7="payport"
      loc8={payport8} dalt8="payport"
      />
    </div>
  )
}

export default Payport
