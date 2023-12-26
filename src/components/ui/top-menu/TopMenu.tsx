import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import { IoCartOutline, IoSearchOutline, IoMenuOutline, IoBagHandleSharp } from 'react-icons/io5'

export const TopMenu = () => {
  return (
    <nav className='flex px-10 py-3 justify-between items-center w-full border-b-2'>
        {/*Logo*/}
        <div className='flex'>
            <IoBagHandleSharp className='w-5 h-5' />
            <Link href='/'>
                <span className={ `${ titleFont.className } antialiased font-bold` }>Ecommerce</span>
            </Link>
        </div>

        {/*Menu Options*/}
        <div className='hidden sm:block'>
            <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-300' href='/category/men'>Men</Link>
            <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-300' href='/category/women'>Women</Link>
            <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-300' href='/category/kids'>Kids</Link>
        </div>

        {/*Search, Cart, Menu*/}
        <div className='flex items-center gap-3'>
            {/*Search Button*/}
            <Link href='/search'>
                <IoSearchOutline className='w-5 h-5' />
            </Link>
            {/*Cart Button*/}
            <Link href='/cart'>
                <div className='relative'>
                    <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>
                        5
                    </span>
                    <IoCartOutline className='w-5 h-5' />
                </div>
            </Link>
            {/*Menu Button*/}
            <button className='ml-1'>
                <IoMenuOutline className='w-5 h-7' />
            </button>
        </div>
    </nav>
  )
}
