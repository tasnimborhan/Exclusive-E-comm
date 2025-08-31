import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";


const NextArrow = (props) => {
    const {   onClick } = props;

  return (
     <div
      className={"text-4xl absolute right-20 bottom-75"}
      
      onClick={onClick}
    ><FaArrowCircleRight /></div>
  )
}

export default NextArrow