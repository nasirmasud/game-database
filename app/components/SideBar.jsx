import { Backpack, Heart, House, LayoutDashboard, SquareLibrary, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const SideBar = () => {
  return (
    <aside className='w-64 h-full bg-[#0d1117] border-r border-gray-800 flex flex-col justify-between p-6 shrink-0'>
      <div>
        {/* Logo */}
        <div className='flex items-center gap-2 mb-10 font-bold text-lg tracking-wider text-blue-400'>
          <Image
            src={'/logo.png'}
            alt='IGDB'
            width={148}
            height={148}
            priority
            className='mx-auto'
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>

        {/* Navigation Links */}
        <nav className='space-y-2'>
          {/* Active Link (Home) - Text and Icon are Blue */}
          <Link
            href='/'
            className='flex items-center gap-3 px-4 py-3 bg-[#1f2937] text-blue-400 rounded-xs text-sm font-medium'
          >
            <House size={18} /> Home
          </Link>

          {/* Other Links - Text and Icons changed to text-blue-500, hovering turns them to light blue */}
          <Link
            href='/category'
            className='flex items-center gap-3 px-4 py-3 text-blue-500 hover:text-blue-400 rounded-xs text-sm font-medium transition'
          >
            <LayoutDashboard size={18} /> Category
          </Link>
          <Link
            href='/library'
            className='flex items-center gap-3 px-4 py-3 text-blue-500 hover:text-blue-400 rounded-xs text-sm font-medium transition'
          >
            <SquareLibrary size={18} /> Library
          </Link>
          <Link
            href='/friends'
            className='flex items-center gap-3 px-4 py-3 text-blue-500 hover:text-blue-400 rounded-xs text-sm font-medium transition'
          >
            <Users size={18} />  Friends
          </Link>
          <Link
            href='/buys'
            className='flex items-center gap-3 px-4 py-3 text-blue-500 hover:text-blue-400 rounded-xs text-sm font-medium transition'
          >
            <Backpack size={18} /> Buys
          </Link>
          <Link
            href='/wishlist'
            className='flex items-center gap-3 px-4 py-3 text-blue-500 hover:text-blue-400 rounded-xs text-sm font-medium transition'
          >
            <Heart size={18} /> Wishlist
          </Link>
        </nav>
      </div>

      {/* Profile Section at Bottom */}
      <div className='flex items-center gap-3 border-t border-gray-800 pt-4'>
        <div className='w-10 h-10 bg-gray-600 rounded-full'></div>
        <div>
          {/* Profile text changed to blue shades */}
          <p className='text-sm font-semibold text-blue-400'>User25</p>
          <p className='text-xs text-blue-600'>user25@gmail.com</p>
        </div>
      </div>
    </aside>
  )
}

export default SideBar