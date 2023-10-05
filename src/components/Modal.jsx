const Modal = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 mx-5">
          <div className="sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              {/* Encabezado de la tarjeta */}
              <div className="bg-blue-500 p-4 text-white">
                <h2 className="text-2xl font-semibold">Modal de Tarjeta</h2>
              </div>
              {/* Contenido del modal */}
              <div className="p-8">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta explicabo deleniti dolor quibusdam corrupti impedit possimus facilis, maiores dignissimos temporibus hic aliquid quod a inventore rem reprehenderit eveniet ad quae!</p> 
             </div>
              {/* Botón para cerrar el modal */}
              <div className="p-4 text-center">
                <button
                  onClick={closeModal}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cerrar Modal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
