import { useState, useEffect } from 'react';
import axios from 'axios';
import Publicacion from '../components/Publicacion';
import Nav from '../components/Barra.Navegacion';



function Principal() {
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
      <Nav />
      <div className='mt-12 mb-4 md:mt-0 md:mb-0 md:w-1/2'>
        {usuario.map((user) => (
          <Publicacion key={user.id} usuario={user} queja={queja} />
        ))}

      </div>
    </div>
  );
}

export default Principal;
