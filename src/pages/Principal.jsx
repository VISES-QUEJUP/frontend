import { useState, useEffect } from 'react';
import axios from 'axios';
import Publicacion from '../components/Publicacion';
import { BsPlusCircle } from 'react-icons/bs';
import { GrHomeRounded } from 'react-icons/gr'
import buho from '../images/buho.png'
function ParentComponent() {
  const [usuario, setUsuario] = useState([]);
  const [queja, setQueja] = useState([]);

  const ListadoUsuarios = async () => {
    try {

      const respuesta = await axios.get('http://localhost:3000/api/users')
      console.log(respuesta)
      setUsuario(respuesta.data)

    } catch (error) {
      console.log(error)
    }
  }

  const ListadoQuejas = async () => {
    try {

      const respuesta = await axios.get('http://localhost:3000/api/quejas')
      console.log(respuesta)
      setQueja(respuesta.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    ListadoUsuarios();
    console.log(usuario)
    ListadoQuejas()
    console.log(queja)
  }, []);

  return (



    <div className=" w-auto h-auto flex justify-around">
      <div className=' bg-white sm: fixed w-full h-12 top-0 text-center md:hidden '>
        <h1 className='font-PTSerif text-2xl cursor-pointer'>Quejup</h1>
      </div>

      <div className="bg-white sm: fixed w-full h-12 flex bottom-0 items-center justify-evenly md:h-full md:w-12 left-0 md:fixed md:flex-col lg:w-2/12 ">
        <h1 className='font-PTSerif text-5xl cursor-pointer hidden lg:block'>
          Quejup
        <div className='mt-3 w-full h-1 bg-gradient-to-tr from-green-400 to-blue-400 rounded-full hidden lg:block'></div>
        </h1>


        <div className='cursor-pointer flex lg:hover:bg-gradient-to-tr from-green-200 to-blue-200 lg:w-full rounded '>
          <GrHomeRounded className=' h-1/2 w-auto md:h-6 lg:m-2' />
          <p className='hidden lg:block mt-2'>Inicio</p>
        </div>

        <div className='cursor-pointer flex lg:hover:bg-gradient-to-tr from-green-200 to-blue-200  w-auto h-auto lg:w-full rounded'>
          <BsPlusCircle className='h-1/2 w-auto  md:h-7 lg:m-2' />
          <p className='hidden lg:block mt-2'>Queja</p>
        </div>


        <div className='cursor-pointer flex lg:hover:bg-gradient-to-tr from-green-200 to-blue-200 w-auto h-auto lg:w-full rounded'>
          <div className="w-10 h-10 rounded-full overflow-hidden md:w-auto md:h-auto lg:w-10 lg:h-auto lg:ml-1">
            <img
              src={buho}
              alt="Foto de perfil del usuario"
              className="w-full h-full object-cover"
            />
          </div>
          <p className='hidden lg:block m-3'>Perfil</p>
        </div>


      </div>

      <div className='mt-12 mb-4 md:mt-0 md:mb-0 md:w-1/2'>
        {usuario.map((user) => (
          <Publicacion key={user.id} usuario={user} queja={queja} />
        ))}

      </div>




    </div>
  );
}

export default ParentComponent;
