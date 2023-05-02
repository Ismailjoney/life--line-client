
import { Inter } from 'next/font/google'
import JoinVulenteers from '@/Components/JoinVulenteers/JoinVulenteers'
import OurVulenteers from '@/Components/OurVulenteers/OurVulenteers'
import MoneyGoes from '@/Components/MoneyGoes/MoneyGoes'
import ContactUs from '@/Components/ContactUs/ContactUs'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col   lg:px-24`}>
      {/* className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} */}
      <MoneyGoes></MoneyGoes>
      <JoinVulenteers></JoinVulenteers>
      <OurVulenteers></OurVulenteers>
      <ContactUs></ContactUs>
    </main>
  )
}
