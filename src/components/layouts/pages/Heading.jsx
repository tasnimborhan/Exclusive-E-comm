import React from 'react'

const Heading = (props) => {
  return (
    <props className={props.className}>{props.text}</props>
  )
}

export default Heading