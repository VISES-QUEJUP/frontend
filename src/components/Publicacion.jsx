import EstadoQueja from './Estado.Queja';
import buho from '../images/buho.png';
import img2 from '../images/img2.jpeg';
import { BsHeart } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'
const Publicacion = ({queja,usuario}) => {
  return (
    <div className='flex justify-center items-center h-screen bg-slate-300'>
      <div className="max-w-screen-xl mx-auto shadow-lg m-4 bg-white rounded-md overflow-hidden h-max">
        <div className="flex items-center p-4">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
            <img
              src={buho}
              alt="Foto de perfil del usuario"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-base">{usuario.name}</div>
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
            {queja.cuerpo}
          </p>
        </div>

        {/* Botones de interacción (por ejemplo, Me gusta y ubicacion) */}
        <div className="px-6 py-4 flex justify-between items-center">
          {/* Contenedor para las imágenes */}
          <div className="flex">
            
            {/* Botón de corazón */}
            <div>
              <BsHeart
                alt="Me gusta"
                style={{ width: '25px', height: '25px', cursor: 'pointer', marginRight: '8px' }} />
            </div>
            {/* Botón de ubicación */}
            <div>
              <SlLocationPin
                alt="Ubicación"
                style={{ width: '25px', height: '25px', cursor: 'pointer', marginRight: '8px' }} />
            </div>
          </div>
          <EstadoQueja estado={1} />
        </div>
        <div className="px-6 py-2">

        </div>
      </div>
    </div>
  );
}

export default Publicacion;