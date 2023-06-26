import Image from 'next/image'

import googleplay from "@/images/google-play-badge.png"
import appstore from "@/images/Download_on_the_App_Store_Badge_NO_RGB_blk_100317.svg"
import appen from "@/images/appen.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className=' text-lg'> En app for deg som irriterer deg over at du ikke finner prisen på varen</p>
        <Image className=' pt-8' src={appen} alt="bilde av appen"></Image>
      </div>
      <div className=' flex flex-col items-center'>
        
        <p >Last ned appen i dag!</p>
        <Image src={googleplay} alt="googleplay logo"></Image>
        <Image src={appstore} alt="apple logo" width={400}></Image>

      </div>
    </main>
  )
}
