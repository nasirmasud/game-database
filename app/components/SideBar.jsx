import { Backpack, Heart, House, LayoutDashboard, SquareLibrary, Users } from 'lucide-react'
import Link from 'next/link'

const SideBar = () => {
  return (
    <aside className='w-64 h-full bg-[#0d1117] border-r border-gray-800 flex flex-col justify-between p-6 shrink-0'>
      <div>
        {/* Logo */}
        <div className='flex items-center gap-2 mb-10 font-bold text-lg tracking-wider text-blue-400'>
          <span className='p-1.5 bg-blue-600 text-white rounded'>G:</span>{" "}
          PLATFORM
        </div>

        {/* Navigation Links */}
        <nav className='space-y-2'>
          <Link
            href='/'
            className='flex items-center gap-3 px-4 py-3 bg-[#1f2937] rounded-xl text-sm font-medium'
          >
            <House /> Home
          </Link>
          <Link
            href='/category'
            className='flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white rounded-xl text-sm font-medium transition'
          >
            <LayoutDashboard /> Category
          </Link>
          <Link
            href='/library'
            className='flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white rounded-xl text-sm font-medium transition'
          >
            <SquareLibrary /> Library
          </Link>
          <Link
            href='/friends'
            className='flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white rounded-xl text-sm font-medium transition'
          >
            <Users />  Friends
          </Link>
          <Link
            href='/buys'
            className='flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white rounded-xl text-sm font-medium transition'
          >
            <Backpack /> Buys
          </Link>
          <Link
            href='/wishlist'
            className='flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white rounded-xl text-sm font-medium transition'
          >
            <Heart /> Wishlist
          </Link>
        </nav>
      </div>

      {/* Profile Section at Bottom */}
      <div className='flex items-center gap-3 border-t border-gray-800 pt-4'>
        <div className='w-10 h-10 bg-gray-600 rounded-full'></div>
        <div>
          <p className='text-sm font-semibold'>User25</p>
          <p className='text-xs text-gray-500'>user25@gmail.com.</p>
        </div>
      </div>
    </aside>

  )
}

export default SideBar
