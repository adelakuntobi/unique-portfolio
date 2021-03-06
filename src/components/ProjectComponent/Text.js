import React from 'react'

function Text(props) {
  const { title, content, content2, space, key } = props

  return (
    <div className="mb-2">
      <h2>{title}<span className="yellow font-extrabold text-base">&#x25AA; </span></h2>
      <p>{content}</p>{space}
      <p>{content2}</p> {key}
    </div>
  )
}

export default Text
