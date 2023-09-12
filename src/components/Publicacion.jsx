import { useState } from 'react';
import EstadoQueja from './estado_queja';
import img from '../image/buho.png';
import img2 from '../image/img2.jpeg'; 
import corazon_1 from '../assets/corazon_negro.png';
import corazon_2 from '../assets/corazon_rojo.png';
import location from '../assets/location.png';

const Publicacion = () => {
  // Estado para controlar el contador de likes
  const [likes, setLikes] = useState(0);

  // Estado para controlar si se ha dado "Me gusta" o no
  const [meGusta, setMeGusta] = useState(false);

  // Estado para controlar qué imagen se muestra en el "Me gusta"
  const [imagenActual, setImagenActual] = useState(corazon_1);

  // Función para cambiar la imagen y aumentar o reducir el contador de likes
  const handleMeGustaClick = () => {
    if (meGusta) {
      // Si ya le dio "Me gusta", reducir el contador y cambiar la imagen
      setLikes(likes - 1);
      setImagenActual(corazon_1);
    } else {
      // Si no le había dado "Me gusta", aumentar el contador y cambiar la imagen
      setLikes(likes + 1);
      setImagenActual(corazon_2);
    }

    // Cambiar el estado de "Me gusta" al contrario del estado actual
    setMeGusta(!meGusta);
  };

  return (
    <div className='flex justify-center items-center h-screen bg-slate-300'>
      <div className="max-w-screen-xl mx-auto shadow-lg m-4 bg-white rounded-md overflow-hidden h-max">
        {/* Encabezado de la publicación */}
        <div className="flex items-center p-4">
          {/* Foto de perfil redondeada */}
          <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
            <img
              src={img}
              alt="Foto de perfil del usuario"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Nombre de usuario */}
          <div>
            <div className="font-semibold text-base">Nombre de Usuario</div>
            {/* Muestra la hora de la publicación */}
            <div className="text-xs text-gray-500">{/*TIEMPO*/}</div>
          </div>
        </div>

        {/* Imagen de la publicación */}
        <div className="px-6 py-4">
          {/* Imagen de la publicación con altura ajustable */}
          <img
            src={img2}
            alt="Descripción de la imagen"
            className="w-full h-auto md:h-96"
          />
        </div>

        {/* Información de la publicación */}
        <div className="px-6 py-4">
          <p className="text-sm text-gray-600">
            Descripción de la publicación.
          </p>
        </div>

        {/* Botones de interacción (por ejemplo, Me gusta y Comentar) */}
        <div className="px-6 py-4 flex justify-between items-center">
          {/* Contenedor para las imágenes */}
          <div className="flex">
            {/* Imagen de corazón */}
            <div>
              {/* Cuando se hace clic en la imagen, se llama a handleMeGustaClick */}
              <img
                src={imagenActual}
                alt="Me gusta"
                onClick={handleMeGustaClick}
                style={{ cursor: 'pointer', marginRight: '8px' }}
              />
            </div>
            {/* Imagen de ubicación */}
            <div>
              <img
                src={location}
                alt="Ubicación"
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
          <EstadoQueja estado={1} />
        </div>

        {/* Muestra el contador de likes */}
        <div className="px-6 py-2">
          <p>{likes} Me gusta</p>
        </div>
      </div>
    </div>
  );
};

export default Publicacion;
