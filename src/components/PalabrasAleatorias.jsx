import { useEffect, useState } from 'react';

function PalabrasAleatorias() {
  const palabras = [
    "¡Bienvenido!",    // Español
    "¡Welcome!",        // Inglés
    "¡Benvenuto!",      // Italiano
    "¡Bem-vindo!",      // Portugués
  ];
  
  const [palabraActual, setPalabraActual] = useState();

  useEffect(() => {
    const generarPalabraAleatoria = () => {
      const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
      let letraActual = 0;
      const interval = setInterval(() => {
        if (letraActual < palabraAleatoria.length) {
          setPalabraActual(palabraAleatoria.substring(0, letraActual + 1));
          letraActual++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setTimeout(() => {
              generarPalabraAleatoria();
            },0); // Cambiar la palabra cada 0 segundo después de borrarla
          },5000); // Desaparecer la palabra completa después de 5 segundos
        }
      }, 50); // Cambiar la letra cada 100 ms (0.1 segundos)
    };

    generarPalabraAleatoria();
  },
  []);

  return (
    <h1 className="text-5xl font-semibold text-center">{palabraActual}</h1>
  );
}

export default PalabrasAleatorias;
