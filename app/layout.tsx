import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Vacantes | Encuentra tu oportunidad',description:'Portal público de oportunidades laborales'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}