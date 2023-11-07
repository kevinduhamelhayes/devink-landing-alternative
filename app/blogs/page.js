import Image from 'next/image'
import BlogCard from '../../components/BlogCard'

const page = async () => {
  const fetchData = async () => {
    const response = await fetch(
      'https://devink-cms.onrender.com/api/blogs?populate=cover',
      { next: { revalidate: 86400 } },
    )
    const data = response.json()
    return data
  }

  const blogsData = await fetchData()

  if (!blogsData.data || blogsData.data.length === 0) {
    return null
  }

  return (
    <div className="relative z-20 flex h-full w-full flex-col items-center justify-center bg-blue-dark "
    >
      <figure className="max-h-[100vh] overflow-hidden ">
        <Image
          src="/HERO8.jpg"
          alt="Combria Logo"
          width={2000}
          height={400}
          className=" "
        />
        <div className="absolute inset-0 bg-[#0B132B] opacity-60" />
      </figure>
      <div className="absolute inset-0  z-10 flex flex-col items-center justify-center  text-center">
        <div className="flex flex-row text-white font-regular">
          <Image src="/favicon.ico" width={80} height={60} />
          <h1 className="ml-2 text-[30px] font-semibold md:text-[50px]">
            Devink
            {' '}
            <span className="italic ">Blogs</span>
          </h1>
          </div>
        
        <h2 className="mt-5 text-white text-[20px] font-light md:text-[30px] ">
          Descubre cómo las empresas exitosas se reinventan con la ayuda de la
          tecnología y la ciencia de vanguardia.
        </h2>
      <section className="mt-5 gap-8 flex w-full max-w-[1300px] flex-col md:flex-row">
        {blogsData
          ? blogsData.data?.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))
          : 'No hay blogs'}
      </section>
      </div>
</div>
  )
}

export default page
