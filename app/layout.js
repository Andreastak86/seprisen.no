import './globals.css'
// import Navbar from '@/components/navbar'



export const metadata = {
  title: 'Seprisen.no',
  description: 'For deg som vil vite hva prisen er før du kjøper',
}

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar/> */}
      <body >{children}</body>
      </div>
   
  )
}
