/* eslint-disable max-len */
import React from 'react'
import Image from 'next/image'

const Projects = () => (
  <div className="relative  z-20">
    <figure className=" max-h-[90vh] overflow-hidden">
      <Image
        src="/HERO8.jpg"
        alt="Combria Logo"
        width={2000}
        height={400}
        className=" "
      />
      <div className="absolute inset-0 bg-[#0B132B] opacity-60" />
    </figure>
    <div className="absolute inset-0  z-10 flex flex-col items-center justify-center p-4 text-center">
      <h3 className="mb-8 text-2xl text-cyan md:text-4xl xl:text-6xl">
        Tu crecimiento es nuestro objetivo
      </h3>

      <p className="mb-4 mt-2 max-w-[80%] text-sm text-white md:text-xl xl:text-2xl">
        Impulsa tu presencia en línea con nuestro servicio integral de desarrollo de marca, creación de contenido y diseño de landing pages personalizadas.
      </p>
      <p className="mt-2 hidden max-w-[80%] text-sm text-white sm:block md:text-xl xl:text-2xl">
        Con un enfoque creativo y estratégico, nuestro equipo trabaja para construir una identidad de marca sólida que resuene con tu audiencia y destaque en el mercado.
      </p>
      <p className="mt-2 hidden max-w-[80%] text-sm text-white sm:block md:text-xl xl:text-2xl">
        Desde contenido atractivo hasta landing pages optimizadas para conversión, ofrecemos soluciones personalizadas que no solo capturan la esencia de tu negocio, sino que también impulsan resultados tangibles.
      </p>
    </div>
  </div>
)

export default Projects
