import { useState, useEffect } from 'react';
import Publicacion from '../components/Publicacion';
import Nav from '../components/Barra.Navegacion';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext'
import { getPublicaciones } from '../api/auth.js';
function Principal() {
  const [publicacion, setPublicacion] = useState([]);

  const ListadoPublicaciones = async () => {
    try {
      const respuesta = await getPublicaciones();
      setPublicacion(respuesta.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    ListadoPublicaciones();
  }, []);

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
      if (!isAuthenticated) {
          return navigate("/ingresar")
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

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
