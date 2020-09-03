import React from 'react'
import { DotScale } from 'styled-loaders-react'

function Loader() {
  return (
    <div>
      <div className="h-screen w-screen fixed top-0 left-0 bg-black z-20 bg-opacity-75 flex justify-center items-center">
        <DotScale color="white"  height={150} width={150} radius={300}/>
      </div>
    </div>
  )
}

export default Loader
