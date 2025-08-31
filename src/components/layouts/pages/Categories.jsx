import React from 'react'
import Container from "/src/components/layouts/pages/Container"
import Flex from "/src/components/layouts/pages/Flex"
import Image from "/src/components/layouts/pages/Image"
import  computer from "/src/assets/computer.png"
import  console from "/src/assets/console.png"
import  phone from "/src/assets/phone.png"
import  headphone from "/src/assets/headphone.png"
import  watch from "/src/assets/watch.png"
// ===========================================
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Categories = () => {
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  return (
   
  <>
  <Container>
     <div className="py-10 bg-white">
         <Flex className="gap-x-5">
     <div className="py-5 px-2 bg-[#DB4444] rounded-[5px]"></div>
     <div className="text-[#D44444]  ">Categories</div>
    </Flex>
     </div>
      <div className="py-5"></div>
       <h3 className="text-3xl font-semibold">Browse By Category</h3>
     <Slider {...settings} className="py-20">
      <div>
       <Image imgSrc={computer} className="hover:bg-[#DB4444] duration-500 rounded-[5px]"/>
      </div>
      <div>
        <Image imgSrc={console} className="hover:bg-[#DB4444] duration-500 rounded-[5px]"/>
      </div>
      <div>
       <Image imgSrc={watch} className="hover:bg-[#DB4444] duration-500 rounded-[5px] " />
      </div>
      <div>
         <Image imgSrc={headphone}className="hover:bg-[#DB4444] duration-500 rounded-[5px] "/> 
      </div>
      <div>
       <Image imgSrc={phone}className="hover:bg-[#DB4444] duration-500 rounded-[5px] " />
      </div>
      <div>
       <Image imgSrc={computer} className="hover:bg-[#DB4444] duration-500 rounded-[5px]"/>
      </div>
      <div>
        <Image imgSrc={console} className="hover:bg-[#DB4444] duration-500 rounded-[5px]"/>
      </div>
      <div>
       <Image imgSrc={watch} className="hover:bg-[#DB4444] duration-500 rounded-[5px] " />
      </div>
      <div>
         <Image imgSrc={headphone}className="hover:bg-[#DB4444] duration-500 rounded-[5px] "/> 
      </div>
      <div>
       <Image imgSrc={phone}className="hover:bg-[#DB4444] duration-500 rounded-[5px] " />
      </div>
     
    </Slider>
  </Container>

  
   
   </>
  )
}


export default Categories