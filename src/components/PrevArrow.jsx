import React from 'react'
import { FaArrowCircleLeft } from "react-icons/fa";

const PrevArrow = (props) => {
     const {   onClick } = props;
  return (
     <div
          className={"text-4xl absolute right-30 bottom-75"}
          
          onClick={onClick}
        ><FaArrowCircleLeft /> </div>
  )
}

export default PrevArrow