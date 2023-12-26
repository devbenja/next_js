import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props { product: Product; }

// Componente para cada producto
export const ProductGridItem = ( { product }: Props ) => {
  return (
    <div className='rounded overflow-hidden fade-in border'>
        {/* Imagen del producto */}
        <Link href={`/product/${ product.slug }`}>
            <Image 
                src={`/products/${ product.images[0]}`} 
                alt={ product.title } 
                className='w-full object-cover'
                width={ 500 }
                height={ 500 }
            />
        </Link>
        {/* Titulo y Precio del Producto */}
        <div className='p-4 flex flex-col'>
            <Link href={`/product/${ product.slug }`} className='hover:text-blue-600'>
                { product.title }
            </Link>
            <span className='font-bold'>${ product.price }</span>
        </div>
    </div>
  )
}
