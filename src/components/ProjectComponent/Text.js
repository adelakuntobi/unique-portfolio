import React from 'react'

function Text(props) {
  const {title,content,content2,space} = props

  return (
    <div className="my-8 lg:my-12">
      <h2>{title}<span className="yellow font-extrabold ">&#x25AA; </span></h2>
      <p>{content}</p>{space}
      <p>{content2}</p>
    </div>
  )
}

export default Text
