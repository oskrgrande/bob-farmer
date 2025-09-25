import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {

  return (
    <main className="flex flex-col justify-between h-screen">
      <Navbar />  
      {/* Contenido principal */}
      <div className="overflow-auto min-w-screen md:min-w-full w-full p-6">
          <Outlet />
      </div>
        <Footer />
    </main>
  )
}

export default HomeLayout
