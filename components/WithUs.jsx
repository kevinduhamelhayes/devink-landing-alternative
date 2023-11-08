import React from 'react'
import Image from 'next/image'

const WithUs = () => (
  <div className="relative  z-20">
    <figure className=" max-h-[90vh] overflow-hidden">
      <Image
        src="/img2.jpg"
        alt="Combria Logo"
        width={2000}
        height={1000}
        className=" "
      />
      <div className="absolute inset-0 bg-[#0B132B] opacity-60" />
    </figure>
    <div className="absolute inset-0  z-10 flex flex-col items-center justify-center p-4 text-center">
      <h3 className="mb-8 text-2xl text-cyan md:text-4xl xl:text-6xl">
        Servicios de Capacitación y Pair Programming
      </h3>

      <p className="mb-4 mt-2 max-w-[80%] text-sm text-white md:text-xl xl:text-2xl">
        Inicia en programación con nuestra capacitación y pair programming.
      </p>
      <p className="mb-4 mt-2 hidden max-w-[80%] text-sm text-white sm:block md:text-xl xl:text-2xl">
        Aprende con tutores expertos y adopta las mejores prácticas de codificación.
      </p>
      <p className="mt-2 hidden max-w-[80%] text-sm text-white sm:block md:text-xl xl:text-2xl">
        Invierte en tu desarrollo con sesiones prácticas y asesoría personalizada.
      </p>
      <p className="mt-2 hidden max-w-[80%] text-sm text-white sm:block md:text-xl xl:text-2xl">
        Avanza rápidamente en software trabajando codo a codo con profesionales.
      </p>

      <button className="mt-6 rounded-full border border-cyan-bright px-12 py-4 text-xl font-semibold text-cyan-bright" type="button">
        Saber más...
      </button>
    </div>
  </div>
)

export default WithUs
