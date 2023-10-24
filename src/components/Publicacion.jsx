/* eslint-disable react/prop-types */
import EstadoQueja from './Estado.Queja';
import buho from '../images/buho.png';
import { BsHeart } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'
import { useState} from 'react';
import Modal from "./Modal"
import { mensajeTiempo } from '../functions/calcularTiempo';

const Publicacion = ({ publicacion }) => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (

    <div className='w-auto h-auto flex justify-center items-center border-2 border-gray-300 my-1'>
      <div className="h-auto w-auto bg-white overflow-hidden">
        <div className="flex items-center m-3">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
            <img
              src={buho}
              alt="Foto de perfil del usuario"
              className="w-full h-full object-cover"
            />
          </div>
          <div className=''>
            <div className="flex items-center">
              <div className="font-semibold text-base mr-2">{publicacion.Usuario.name}</div>
              <div className="w-1 h-1 rounded-full bg-gray-500 mr-2"></div>
              <div className="text-xs text-gbg-gray-500">{mensajeTiempo(publicacion.createdAt)}</div>
            </div>


            <h1 className='text-xs '>{publicacion.titulo}</h1>
          </div>
        </div>

        {/* Imagen de la publicación */}
        <div className="py-4">
          {/* Imagen de la publicación con altura ajustable */}
          <img
            src={publicacion.secure_URL}
            alt="Descripción de la imagen "
            className="w-screen h-96 md:h-96 rounded-xl"
          />
        </div>

        {/* Información de la publicación */}
        <div className="px-6 py-4">
          <p className="text-sm">
            {publicacion.cuerpo}
          </p>
        </div>

        {/* Botones de interacción*/}
        <div className="px-6 py-2 flex justify-between items-center">
          {/* Contenedor para las imágenes */}
          <div className="flex">

            {/* Botón de corazón */}
            <div>
              <BsHeart
                alt="Me gusta"
                style={{ width: '25px', height: '25px', cursor: 'pointer', marginRight: '8px' }} />
            </div>
            {/* Botón de ubicación */}
            <div onClick={openModal}>
              <SlLocationPin
                alt="Ubicación"
                style={{ width: '25px', height: '25px', cursor: 'pointer', marginRight: '8px' }} />
            </div>
          </div>
          <EstadoQueja estado={3} />
        </div>
        <div className="h-7 my-3 w-full mb-5">
            <p className='text-base ml-5'>{publicacion.cant_Votos} Me gusta</p>
        </div>
      </div>
      <Modal isOpen={modalOpen} closeModal={closeModal} latitud={publicacion.lat} longitud={publicacion.lon} />
    </div>

  );
}

export default Publicacion;