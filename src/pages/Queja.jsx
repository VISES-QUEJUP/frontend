import { useState } from 'react';
import Nav from "../components/Barra.Navegacion";
import { PiNumberCircleOneLight } from "react-icons/pi";
import { PiNumberCircleTwoLight } from "react-icons/pi";
import { PiNumberCircleThreeLight } from "react-icons/pi";
import { PiNumberCircleFourLight } from "react-icons/pi";

import { SlLocationPin } from 'react-icons/sl';
import Modal from '../components/Modal';

export default function Queja() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const [coordenadas, setCoordenadas] = useState({ lat: null, lon: null });
    const [mostrarCoordenadas, setMostrarCoordenadas] = useState(false);

    const obtenerCoordenadas = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    setCoordenadas({ lat, lon });
                    setMostrarCoordenadas(true); // Mostrar el párrafo
                },
                function (error) {
                    if (error.code === error.PERMISSION_DENIED) {
                        alert("No has permitido el acceso a la ubicación. Por favor, permite el acceso para obtener las coordenadas.");
                    } else {
                        alert("Error al obtener las coordenadas: " + error.message);
                    }
                }
            );
        } else {
            alert("Geolocalización no está disponible en tu navegador.");
        }
    };

    const handleObtenerCoordenadasClick = (event) => {
        event.preventDefault();
        obtenerCoordenadas();
    };

    // eslint-disable-next-line no-unused-vars
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setImageUrl(URL.createObjectURL(e.target.files[0]));
    };



    return (
        <>
            <form action="">
                <div className="w-auto h-auto flex justify-around">
                    <Nav />
                    <div className='w-full h-auto mt-12 mb-4 md:mt-0 md:mb-0 md:w-5/6 md:ml-10 lg:w-9/12 lg:ml-56'>
                        <div className='w-full h-auto flex-col border-2 border-gray-300 my-1 flex items-center'>
                            <div>
                                <h1 className="mb-5 text-2xl font-bold">Formulario para Presentación de Quejas.</h1>
                                <h2 className="text-gray-500 my-3">Por favor, completa el formulario con cuidado para que podamos atender tus inquietudes de la mejor manera posible. Tu opinión es importante para nosotros.</h2>
                            </div>

                            <div className="w-full h-14 border-2 rounded-3xl m-5 flex items-center ">
                                <PiNumberCircleOneLight className="h-8 w-10" />
                                <h1>Elija el tipo de queja.</h1>
                            </div>

                            <select name="opciones" id="opciones" className="cursor-pointer w-full h-14 border-2 rounded-3xl">
                                <option value="" disabled selected>Tipos de queja:</option>
                                <option value="opcion1">Ruidos Molestos</option>
                                <option value="opcion2">Calle en mal estado</option>
                                <option value="opcion3">Árbol caído</option>
                                <option value="opcion4">Infraestructura obsoleta</option>
                            </select>

                            <div className="w-full h-14 border-2 rounded-3xl m-5 flex items-center ">
                                <PiNumberCircleTwoLight className="h-8 w-10" />
                                <h1>Elija la imagen de su publicación </h1>
                            </div>
                            <label htmlFor="file-upload">
                                <input type="file" id="file-upload" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
                            </label>
                            <div className={` overflow-hidden my-5 flex justify-center items-center w-full h-1/2 rounded-3xl md:w-4/5 md:h-1/4 ${imageUrl ? 'block' : 'hidden'}`}>
                                {imageUrl && <img src={imageUrl} alt="Vista previa de la imagen" className='w-full h-full object-cover'/>}
                            </div>


                            <div className="w-full h-14 border-2 rounded-3xl m-5 flex items-center ">
                                <PiNumberCircleThreeLight className="h-8 w-10" />
                                <h1>Coordenadas de la ubicación</h1>
                            </div>
                            {mostrarCoordenadas && (
                                <div className='bg-green-400 hover:bg-green-500 mb-5 flex items-center w-full h-14 border-2 rounded-3xl cursor-pointer' onClick={openModal}>
                                    <SlLocationPin className='h-7 w-10' />
                                    <h1>Ubicación obtenida en: Latitud: {coordenadas.lat}, Longitud: {coordenadas.lon}</h1>
                                </div>
                            )}
                            <Modal isOpen={modalOpen} closeModal={closeModal} latitud={coordenadas.lat} longitud={coordenadas.lon} />
                            <button className="w-full h-14 border-2 rounded-3xl bg-blue-500 hover:bg-blue-600" onClick={handleObtenerCoordenadasClick}>Obtener coordenadas actuales</button>

                            <div className="w-full h-14 border-2 rounded-3xl m-5 flex items-center ">
                                <PiNumberCircleFourLight className="h-8 w-10" />
                                <h1>Adjunte una descripción detallando el problema</h1>
                            </div>
                            <textarea

                                name="descripcionProblema"
                                rows="4" // Puedes ajustar la cantidad de filas deseadas
                                placeholder="Ingrese la descripción aquí"
                                className="w-full p-2 border-2 rounded-lg m-5 text-center"
                            ></textarea>

                            <button className="mb-10 w-full h-14 border-2 rounded-3xl bg-gray-900 hover:bg-black text-white md:mb-0 lg:mb-5">Subir</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
