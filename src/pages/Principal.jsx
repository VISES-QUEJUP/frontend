import { useState, useEffect } from 'react';
import axios from 'axios';
import Publicacion from '../components/Publicacion';
import Nav from '../components/Barra.Navegacion';

function Principal() {
  const [publicacion, setPublicacion] = useState([]);

  const ListadoPublicaciones = async () => {
    try {
      const respuesta = await axios.get('http://localhost:3000/api/publicacion')
      setPublicacion(respuesta.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    ListadoPublicaciones();
  }, []);

  return (

    <div className=" w-auto h-auto flex justify-around">
      <Nav />
      <div className='mt-12 mb-4 md:mt-0 md:mb-0 md:w-1/2'>
        {publicacion.map((publicacion) => (
          <Publicacion key={publicacion.id} publicacion={publicacion} />
        ))}


      </div>
    </div>
  );
}

export default Principal;
