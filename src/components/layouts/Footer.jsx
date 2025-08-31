import React from 'react'
import Container from './pages/Container'
import Flex from './pages/Flex'
import { VscSend } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className="py-10 bg-black text-white  ">
      <Container>
        <Flex className="justify-between items-center">
          <div className="relative " >
            <h2 className="font-bold text-2xl">Exclusive</h2>
            <ul>
              <Link><li className="hover:font-bold duration-500">Subscribe</li></Link>
              <Link><li >Get 10% off your first order</li></Link>
            </ul>
            <input type="text" placeholder='Enter Your Email' className="py-2 px-4 w-[200px]  outline-1 rounded-[5px] mt-5"/>
           
          </div>
          <div>
            <h2 className="font-bold text-2xl">Support</h2>
           <ul>
             <Link><li >111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li></Link>
              <Link><li >exclusive@gmail.com</li></Link>
               <Link><li >+88015-88888-9999</li></Link>
           </ul>
          </div>
          <div>
            <h2 className="font-bold text-2xl">Account</h2>
             <ul className="gap-x-10 ">
            <Link><li className="hover:font-bold duration-500">My Account</li></Link>
             <Link><li className="hover:font-bold duration-500" >Login / Register</li></Link>
              <Link><li className="hover:font-bold duration-500" >Cart</li></Link>
               <Link><li className="hover:font-bold duration-500">Wishlist</li></Link>
               <Link><li className="hover:font-bold duration-500">Shop</li></Link>
          </ul>
          </div>
          <div>
             <h2 className="font-bold text-2xl">Quick Link</h2>
             <ul className="gap-x-10 ">
            <Link><li className="hover:font-bold duration-500">Privacy Policy</li></Link>
             <Link><li className="hover:font-bold duration-500" >Terms Of Use</li></Link>
              <Link><li className="hover:font-bold duration-500" >FAQ</li></Link>
               <Link><li className="hover:font-bold duration-500">Contact</li></Link>
              
          </ul>
          </div>
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Footer