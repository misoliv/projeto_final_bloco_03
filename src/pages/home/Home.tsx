function Home() {
  return (
    <>
      <div className="bg-cyan-200 flex justify-center">
        <div className="container grid grid-cols-2 text-gray-800">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>
              Seja Bem Vindo!
            </h2>
            <div className="flex justify-around gap-4">
              <div className='rounded text-gray-800 border-white border-solid border-2 py-2 px-4'>
                Novo Produto
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/milenasoliv10/p_go_3/imagem_home.png"
              alt="Imagem Página Home"
              className='w-2/3'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
