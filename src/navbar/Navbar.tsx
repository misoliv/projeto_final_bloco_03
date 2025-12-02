import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className='w-full flex justify-center py-4 bg-cyan-200 text-gray-800'>

        <div className="container flex justify-between text-lg mx-8">
         <Link to='/home'>
                        <img
                            src="https://ik.imagekit.io/milenasoliv10/p_go_3/logotipo.png"
                            alt="Logo"
                            className='w-50 md:w-60'
                        />
                    </Link>
          <div className='flex gap-4'>
            Categorias
            Cadastrar Categorias
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar