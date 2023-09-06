import img from '../image/buho.png'

export default function Register(){
    return(

        <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="flex w-7/12 justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full ">
        <h1 className="text-5xl font-semibold text-center">Registro</h1>
          <div className="mt-3 mb-3 w-full h-1 bg-gradient-to-tr from-green-400 to-blue-400 rounded-full " />
          <p className="mb-3 font-medium text-lg text-gray-500 mt-5 text-center">A continuación, ingrese sus datos:</p>
          <form>
          <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium ">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-opacity-50"
                placeholder="Nombre completo"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 block w-full border rounded-md  focus:ring focus:ring-opacity-50"
                placeholder="Correo electrónico"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-lg font-medium">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 block w-full border rounded-md  focus:ring focus:ring-opacity-50"
                placeholder="Contraseña"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-lg font-medium">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 p-2 block w-full border rounded-md  focus:ring focus:ring-opacity-50"
                placeholder="Contraseña"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="birthdate" className="block text-lg font-medium">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                className="mt-1 p-2 block w-full border rounded-md  focus:ring focus:ring-opacity-50"
                required
              />
            </div>
            <button
              type="submit"
              className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition duration-300"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
        </div>
        <div className="hidden lg:flex h-full w-1/2 bg-white items-center justify-center">
            <img src={img} alt="imagen"/>
        </div>
    </div>





       
    )
}