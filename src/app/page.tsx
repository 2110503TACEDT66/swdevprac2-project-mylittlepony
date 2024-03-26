import Banner from '@/components/Banner'
import { duration } from '@mui/material'
import {Toaster} from 'react-hot-toast'
// import PromoteCard from '@/components/PromoteCard';

export default function Home() {
  return (
    <main>
      <Toaster position='bottom-right' toastOptions={{duration: 1000}}/>
      <Banner/>
      {/* <PromoteCard></PromoteCard> */}
    </main>
  )
}
