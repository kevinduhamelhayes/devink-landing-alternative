import React from 'react'
import Image from 'next/image'

const Projects = () => (
  <div className="relative">
    <figure className="max-h-[90vh] overflow-hidden">
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
      <h3 className=" mb-8 text-2xl text-white md:text-4xl xl:text-6xl">
        Corporativo & Empresarial
      </h3>

      <p className="mb-4  mt-2 max-w-[80%]  text-sm text-white md:text-xl xl:text-2xl">En el dinámico mundo empresarial de hoy, la figura del abogado corporativo se ha convertido en una pieza clave para el éxito y la estabilidad de cualquier compañía.</p>
      <p className="mt-2 hidden max-w-[80%] text-sm text-white   sm:block md:text-xl xl:text-2xl"> Estos profesionales del derecho no solo están equipados para navegar por el laberinto de regulaciones y leyes que afectan a las empresas, sino que también ofrecen una perspectiva estratégica que puede ser crucial para el crecimiento y la supervivencia a largo plazo.</p>
      <p className="mt-2 hidden max-w-[80%] text-sm text-white   sm:block md:text-xl xl:text-2xl"> Desde la asesoría en la formación de una nueva empresa hasta la gestión de fusiones y adquisiciones, los abogados corporativos son los aliados estratégicos que aseguran que las operaciones comerciales se mantengan dentro del marco legal y optimizan los resultados financieros.</p>
    </div>
  </div>
)

export default Projects
