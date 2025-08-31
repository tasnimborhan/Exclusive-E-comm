import React from 'react'
import Container from "/src/components/layouts/pages/Container"
import Flex from "/src/components/layouts/pages/Flex"
import Image from "/src/components/layouts/pages/Image"
import  computer from "/src/assets/computer.png"
import  console from "/src/assets/console.png"
import  phone from "/src/assets/phone.png"
import  headphone from "/src/assets/headphone.png"
import  watch from "/src/assets/watch.png"




const Categories = () => {
  return (

 
   <>
   <div className="py-10 bg-white">
   <Container>
    <Flex className="gap-x-5">
     <div className="py-5 px-2 bg-[#DB4444] rounded-[5px]"></div>
     <div className="text-[#D44444]  ">Categories</div>
    </Flex>
   </Container>
   </div>
   <div className="py-5">
    <Container>
        <h3 className="text-3xl font-semibold">Browse By Category</h3>
    </Container>
   </div>
   <div className="py-10 bg-white">
    <Container>
        <Flex className="gap-x-20">
            <Image imgSrc={computer} className="hover:bg-[#DB4444] duration-500 rounded-[5px]"/>
           
            <Image imgSrc={console} className="hover:bg-[#DB4444] duration-500 rounded-[5px]"/>
             <Image imgSrc={watch} className="hover:bg-[#DB4444] duration-500 rounded-[5px] " />
              <Image imgSrc={headphone}className="hover:bg-[#DB4444] duration-500 rounded-[5px] "/>      
               <Image imgSrc={computer}className="hover:bg-[#DB4444] duration-500 rounded-[5px] " />
                <Image imgSrc={phone}className="hover:bg-[#DB4444] duration-500 rounded-[5px] " />
        </Flex>
    </Container>
   </div>
   </>
  )
}

export default Categories