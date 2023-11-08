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
        Potencia tu marca en línea con servicios de desarrollo y diseño a medida.
      </p>
      <p className="mt-2 hidden max-w-[80%] text-sm text-white sm:block md:text-xl xl:text-2xl">
        Nuestro equipo crea identidades de marca que conectan y sobresalen.
      </p>
      <p className="mt-2 hidden max-w-[80%] text-sm text-white sm:block md:text-xl xl:text-2xl">
        Generamos contenido y landing pages para maximizar tu conversión.
      </p>
      <p className="mt-2 hidden max-w-[80%] text-sm text-white sm:block md:text-xl xl:text-2xl">
        Con soluciones personalizadas, impulsamos el crecimiento de tu negocio.
      </p>

    </div>
  </div>
)

export default Projects
