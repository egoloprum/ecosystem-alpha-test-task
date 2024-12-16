import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-wrap sm:flex-nowrap justify-between'>
        <Link href="/" className='rounded-l-lg p-2 px-8 border-2 flex-1 text-center text-nowrap text-sm sm:text-base md:text-lg cursor-pointer hover:bg-slate-200 font-bold'>
          <span className='w-full'>Main page</span>
        </Link >
        <Link href="products" className='p-2 px-8 border-2 flex-1 text-center text-nowrap text-sm sm:text-base md:text-lg cursor-pointer hover:bg-slate-200 font-bold'>
          <span className='w-full'>Product</span>
        </Link >
        <Link href="create_products" className='rounded-r-lg p-2 px-8 border-2 flex-1 text-center text-nowrap text-sm sm:text-base md:text-lg cursor-pointer hover:bg-slate-200 font-bold'>
          <span className='w-full'>Create Product</span>
        </Link >
        
      </div>

    </div>
  )
}

export default Navbar
