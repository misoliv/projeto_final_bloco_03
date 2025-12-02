import ModalProduto from "../../components/produtos/modalproduto/ModalProduto";

function Home() {
  return (
    <>
      <div className="bg-cyan-300 flex justify-center pt-24">
        <div className="container grid grid-cols-2 text-gray-800">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja Bem Vindo!</h2>

            <div className="flex justify-around gap-2">
              <div className='rounded text-gray-800 py-2 px-4'>
                <ModalProduto />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
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

export default Home;



