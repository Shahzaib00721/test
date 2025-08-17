"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import NewNavbar from "./components/NewNavbar";
import NewDababar from "./components/NewDababar";
import NewContect from "./components/NewContect";
import NewData from "./components/NewData";

import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // section refs
  const processRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const faqsRef = useRef(null);

  const scrollTo = (ref) => {
    setIsMenuOpen(false); // close mobile menu on click
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-white text-black flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full py-6 flex max-768 justify-center items-start gap-10 text-sm font-medium text-gray-700 m-5">
        <span className="font-bold text-black text-lg">AVARON</span>

        <div className="hidden md:flex gap-6">
          <button onClick={() => scrollTo(processRef)} className="hover:text-black">Process</button>
          <button onClick={() => scrollTo(aboutRef)} className="hover:text-black">About Us</button>
          <button onClick={() => scrollTo(projectsRef)} className="hover:text-black">Projects</button>
          <button onClick={() => scrollTo(faqsRef)} className="hover:text-black">FAQs</button>
        </div>

        <button className="ml-4 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded text-xs hidden md:block">
          Get Started
        </button>

        <div className="md:hidden absolute right-4 top-6">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenuUnfold size={28} />}
          </button>
        </div>
      </nav>
    
      {/* Hero */}
      <section className="text-center px-4 mt-10">
        <h1 className="text-4xl md:text-5xl font-light leading-tight">
          Experience Modern <br />
          <span className="font-bold">Luxury in Architecture</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded">Lorem ipsum</button>
          <button className="bg-white hover:bg-gray-100 text-gray-700 px-6 py-2 rounded shadow">Lorem ipsum</button>
        </div>
      </section>



{/* Projects Section */}
      <section ref={projectsRef} className="scroll-mt-24 text-center mt-20 px-4 w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Latest Projects</h2>

        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="px-4 py-6 swiper-custom"
          >
            {[...Array(8)].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="w-full h-56 bg-gray-800 rounded-xl"></div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .swiper-custom .swiper-pagination {
              position: static !important;
              margin-top: 20px;
              text-align: center;
            }
          `}</style>
        </div>

        <p className="mt-10 text-lg">Our Work Process:</p>
        <h3 className="text-2xl font-bold">Crafting Architectural Excellence</h3>
      </section>





      {/* Process Section */}
      <section ref={processRef} className="scroll-mt-24 w-full mt-20">
        <NewNavbar />
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="scroll-mt-24 w-full mt-20">
        <NewDababar />
      </section>

      

      {/* FAQs Section */}
      <section ref={faqsRef} className="scroll-mt-24 w-full mt-20">
        <NewContect />
        <NewData />
      </section>
    </main>
  );
}
