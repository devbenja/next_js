import { titleFont } from "@/config/fonts";
import { IoFilterOutline } from "react-icons/io5";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ( { title, subtitle, className}: Props ) => {
  return (
    <div className={ `${ className }` }>
      <h1 className={ `${ titleFont.className } antialiased text-xl font-semibold my-5` }>
        { title }
      </h1>

      {
        subtitle && (
          <div className='flex'>
            <IoFilterOutline className='w-5 h-5 mr-1' />
            <h3 className='text-sm mb-5'>{ subtitle }</h3>
          </div> 
        )
      }
    </div>
  )
}
