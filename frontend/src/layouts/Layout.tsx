import { Outlet } from 'react-router-dom'

const HomeLayout = () => {

  return (
    <main className="grid grid-cols-[auto_1fr] h-screen">
      {/* Contenido principal */}
      <div className="overflow-auto min-w-screen md:min-w-full w-full p-6">
          <Outlet />
      </div>
    </main>
  )
}

export default HomeLayout
