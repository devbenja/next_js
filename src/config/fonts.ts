// Este archivo es para manejar las fuentes del sitio web

import { Inter, Montserrat_Alternates } from "next/font/google";

// Fuente General
export const inter = Inter({ subsets: ['latin'], })

// Fuentes para los titulos 
export const titleFont = Montserrat_Alternates(
    { subsets: ['latin'], weight: ['500', '700'], }
)