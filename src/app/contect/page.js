"use client"
// pages/index.tsx
import { useState } from "react";
import React from "react";





import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

import NewNavbar from "../components/NewNavbar";
import NewDababar from "../components/NewDababar";
import NewContect from "../components/NewContect"
import NewData from "../components/NewData";






import { ClipboardEdit, PenTool, Layers, CheckCircle } from 'lucide-react';





export default function Home() {




    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className=" bg-white text-black flex flex-col items-center ">
      
      {/* Navbar */}
      <nav className="w-full py-6 flex max-768 justify-center items-start gap-10 text-sm font-medium text-gray-700 m-5">
        <span className="font-bold text-black text-lg">AVARON</span>
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-black">Process</a>
          <a href="#" className="hover:text-black">About Us</a>
          <a href="#" className="hover:text-black">Projects</a>
          <a href="#" className="hover:text-black">FAQs</a>
        </div>


      

        <button className="ml-4 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded text-xs hidden md:block">Get Started</button>
 <div className="md:hidden absolute right-4 top-6">
    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenuUnfold size={28} />}
    </button>
  </div>



      </nav>
   
 {isMenuOpen && (
        <div className="md:hidden w-full flex flex-col font-medium items-start pl-20 gap-10 py-10 bg-gray-100 border-b">
          <a href="#" className="hover:text-black">Process</a>
          <a href="#" className="hover:text-black">About Us</a>
          <a href="#" className="hover:text-black">Projects</a>
          <a href="#" className="hover:text-black">FAQs</a>
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded text-xs">Get Started</button>
        </div>
      )}

      {/* Page Content */}
      <section className="flex-1 flex items-center justify-center">
    
      </section>



      {/* Hero Section */}
      <section className="text-center px-4 mt-10">
        <h1 className="text-4xl md:text-5xl font-light leading-tight">
          Experience Modern <br />
          <span className="font-bold">Luxury in Architecture</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded">
            Lorem ipsum
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-700 px-6 py-2 rounded shadow">
            Lorem ipsum
          </button>
        </div>
      </section>






      {/* Projects Section */}
      <section className="text-center mt-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Are Latest Projects</h2>

        <div className="flex flex-wrap justify-center gap-6 px-4 py-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-40 sm:w-44 md:w-48 h-56 bg-gray-800 rounded-xl transform rotate-[5deg] hover:rotate-0 transition-transform duration-300"
            ></div>
          ))}
        </div>

        <p className="mt-10 text-lg">Our Work Process:</p>
        <h3 className="text-2xl font-bold">Crafting Architectural Excellence</h3>
      </section>


<br/>
<br/>
<br/>



<main> 
  <NewNavbar/>

  
  
   </main>

   
<main>
    <NewDababar/>
  </main>


<main><NewContect/></main>




<main><NewData/></main>


    </main>











  );

  
 
}


