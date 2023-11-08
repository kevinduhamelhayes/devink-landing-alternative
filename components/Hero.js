import Link from 'next/link'
import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import Image from 'next/image'

const Hero = () => (
  <div className="relative z-20 overflow-hidden ">
    <figure className="max-h-[100vh] overflow-hidden">
      <Image
        src="/HERO2.jpg"
        alt="Combria Logo"
        width={2000}
        height={400}
        className=""
      />
      <div className="absolute inset-0 bg-[#0B132B] text-cyan opacity-50" />
    </figure>
    <div className="absolute left-[8%] top-[12%] z-20 max-w-[55%] gap-4 border-l-4 border-cyan-bright p-4 text-left">
      <h3 className="animate-fade-up text-2xl font-bold text-cyan animate-delay-75">
        Devink
      </h3>
      <h1 className="animate-fade-up text-5xl font-medium text-cyan animate-delay-75">
        Te ayudamos a construir la solucion digital para tu empresa.
      </h1>
      <h4 className="my-4 animate-fade-up text-3xl text-white animate-delay-75">
        Desarrollos a medida y soluciones IT
      </h4>
      <Link
        href="#makeacall"
        className="mt-2 hidden w-fit animate-fade-up rounded-full border border-[#6fffe9] bg-transparent
           px-12 py-4 text-2xl font-medium text-[#6FFFE9]  md:inline-flex"
      >
        Contáctanos
      </Link>
    </div>
    <div className="flex h-full flex-col gap-2 text-left md:w-3/5">
      <div className="absolute bottom-[12%] right-[14%] z-20 max-w-[55%] border-r-4 border-white border-x-cyan p-4">

        <Image src="/logo-without-name.svg" width={200} height={200} alt="logo" className="animate-fade-right  animate-delay-300" />
      </div>

    </div>
    <div className="flex flex-col items-center justify-center">
      <figure className="absolute bottom-4 ">
        <AiOutlineDown color="#6fffe9" className="animate-bounce text-2xl" />
      </figure>
    </div>
  </div>

)

export default Hero
