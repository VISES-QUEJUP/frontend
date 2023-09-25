import { useState, useEffect } from 'react';
import axios from 'axios';
import Publicacion from '../components/Publicacion';
function ParentComponent() {
  const [usuario, setUsuario] = useState([]);
  const [queja, setQueja] = useState([]);

  const ListadoUsuarios= async ()=>{
    try {

        const respuesta = await axios.get('http://localhost:3000/api/users') 
        console.log(respuesta)
        setUsuario(respuesta.data)

      } catch (error) {
        console.log(error) 
      }
    }

    const ListadoQuejas= async ()=>{
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
    <div>
      {usuario.map((user,queja) => (
        <Publicacion key={user.id} usuario={user} queja={queja} />
      ))}
    </div>
  );
}

export default ParentComponent;
