import React from 'react'
import Text from '../ProjectComponent/Text';

function Successful() {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black z-20 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-12 m-6 text-black">
        <Text title="Thank you for contacting me"
          content="Your email has been sent, I will be in touch shortly." />
      </div>
    </div>
  )
}

export default Successful
