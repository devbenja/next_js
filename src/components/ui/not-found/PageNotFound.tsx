import { titleFont } from "@/config/fonts"
import Link from "next/link"
import Image from "next/image"
import { IoCaretForwardOutline } from "react-icons/io5"

export const PageNotFound = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row h-[600px] w-full justify-center items-center align-middle'>
        <div className='text-center px-5 mx-5'>
            <h2 className={ `${ titleFont.className } antialiased text-9xl` }>404</h2>
            <p className='text-xl'>Whooops! Sorry, Page not found</p>
            <div className='flex justify-center items-center'>
                <IoCaretForwardOutline />
                <Link href='/' className="font-normal hover:underline transition-all">
                    Go Home
                </Link>
            </div>
        </div>

        <div className='px-5 mx-5'>
            <Image
                src='/imgs/starman_750x750.png'
                alt='starman'
                className='p-5 sm:p-0'
                width={ 550 }
                height={ 550 }
            />
        </div>
    </div>
  )
}
