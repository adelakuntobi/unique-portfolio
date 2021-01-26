import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { DotScale } from 'styled-loaders-react'
import Text from '../ProjectComponent/Text'


function Loader(props) {
  const { handler } = props
  const [None, setNone] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setNone(true)
    }, 6000);
  }, [])

  const changeState = () => {
    handler(false)
  }
  return (
    <div>
      <div className="h-screen w-screen fixed top-0 left-0 bg-black z-20 bg-opacity-75 flex justify-center items-center">
        {
          None ?
            <div className="bg-white p-12 m-6 text-black relative">
              <Text title="Thank you for contacting me"
                content="Your email has been sent, I will be in touch shortly." />
              <FontAwesomeIcon icon={['fas', 'times-circle']} color="red" size="2x" cursor="pointer" className="absolute top-0 right-0" onClick={changeState} />
            </div> 
            :
            <DotScale color="white" height={150} width={150} radius={300} />
        }
      </div>
    </div>
  )
}

export default Loader
