import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { Link } from 'react-router-dom'
import Image from './Image'
import bannerimg from "/src/assets/bannerimg.jpg"





const Banner = () => {



  return (
    <>
 















    <div className="py-10 bg-white">
        <Container>
            <Flex className="justify-between">
           <div>
            <ul className="py-10 ">
            <Link><li className="hover:font-bold duration-500">Woman’s Fashion</li></Link>
            <Link><li className="hover:font-bold duration-500" >Men’s Fashion</li></Link>
            <Link><li className="hover:font-bold duration-500" >Electronics</li></Link>
             <Link><li className="hover:font-bold duration-500">Home & Lifestyle</li></Link>
              <Link><li className="hover:font-bold duration-500">Medicine</li></Link>
            <Link><li className="hover:font-bold duration-500" >Sports & Outdoor</li></Link>
            <Link><li className="hover:font-bold duration-500" >Baby’s & Toys</li></Link>
             <Link><li className="hover:font-bold duration-500">Groceries & Pets</li></Link>
              <Link><li className="hover:font-bold duration-500">Health & Beauty</li></Link>
            
         
            </ul>
           </div>
           <div>
         
  

           <Image imgSrc={bannerimg} />
           
  
           </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Banner