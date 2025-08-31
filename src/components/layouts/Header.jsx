import React from 'react'
import { Link, Links } from 'react-router-dom'
import Container from './pages/Container'
import Flex from './pages/Flex'
import Image from './pages/Image'
import logo from "/src/assets/logo.png"
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";

const Header = () => {
  return (
   <>
   <div className="py-[10px] bg-black text-white ">
    <Container>
      <Flex className=" text-center">
        <div className="w-[80%]">
          <h2>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link className=" hover:font-bold duration-500">ShopNow</Link> </h2>
        </div>
      </Flex>
    </Container>
   </div>
   <div classname="bg-[#f5f5f5] ">
    <Container>
      <Flex className="justify-between text-center">
        <div className="py-10 ">
         <Image imgSrc={logo}/>
        </div>
        <div className="gap-x-2">
          <ul className="flex gap-x-10 ">
            <Link><li className="hover:font-bold duration-500">Home</li></Link>
             <Link><li className="hover:font-bold duration-500" >Contact</li></Link>
              <Link><li className="hover:font-bold duration-500" >About</li></Link>
               <Link><li className="hover:font-bold duration-500">Sign Up</li></Link>
          </ul>
        </div>
        <div className="relative ">
          <input type="text" placeholder="What are you looking for?" className="py-2 px-4 w-[200px] bg-[#f5f5f5] outline-0 text-xs rounded-[5px]"/>
          <IoSearchOutline className="absolute right-1 top-1/2 -translate-y-1/2" /> 
       
        </div>
       <div className="flex gap-x-3">
        <IoIosHeartEmpty />
        <RiShoppingCart2Line />
       </div>
      </Flex>
    </Container>
   </div>
   </>
  )
}

export default Header