import Landing from './landing'
import Navbar from './navigation'
import Categories from './categories'
import Menu from './menu'
import Discount from './discount'
import Footer from './footer'

export default function Home() {
  return (
    <main  className='bg-white'>
      <Navbar/>
     <Landing/>
     <Categories/>
     <Menu/>
     <Discount/>
     <Footer/>
    </main>
  )
}
