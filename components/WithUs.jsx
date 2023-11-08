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
        Inicia tu camino en la programación con nuestros servicios de capacitación personalizados y pair programming. Diseñados para principiantes, estos cursos son la puerta de entrada al mundo del desarrollo de software.
      </p>
      <p className="mt-2 mb-4 hidden max-w-[80%] text-sm text-white sm:block md:text-xl xl:text-2xl">
        Opta por un aprendizaje interactivo con la guía de un tutor personal, donde nuestros programadores expertos dedicarán su tiempo para enseñarte las mejores prácticas y técnicas de codificación en un entorno de trabajo real.
      </p>
      <p className="mt-2 hidden max-w-[80%] text-sm text-white sm:block md:text-xl xl:text-2xl">
        Con una inversión en tu futuro, tendrás la oportunidad de aprender de manera práctica mediante sesiones de pair programming, donde podrás codificar junto a un profesional y acelerar tu progreso como desarrollador.
      </p>
      <button className="rounded-full border border-cyan-bright px-12 py-4 mt-6 text-xl text-cyan-bright font-semibold">
        Saber más...
      </button>
    </div>
  </div>
)

export default WithUs
