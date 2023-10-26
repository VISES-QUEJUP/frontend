import Nav from "../components/Barra.Navegacion";
import User from '../images/user.png';
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext'

export default function Perfil() {

    const navigate = useNavigate();
    const { isAuthenticated, user } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            return navigate("/ingresar")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated])
    return (
        <>
            <div className=" w-auto h-auto flex justify-around">
                <Nav />
                <div className=' bg-gradient-to-tr from-white to-gray-300    w-full h-screen mt-14 border-gray-300 flex md:ml-10 md:-mt-1 '>
                    <div className="w-full h-full flex flex-col items-center justify-center lg:ml-64">
                        <div className="-scroll-mt-10 w-48 h-48 rounded-full overflow-hidden">
                            <img
                                src={User}
                                alt="Foto de perfil del usuario"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="mt-4 text-black text-xl">{user.name}</h2>
                        <h3 className="mt-4 text-gray-500 text-base">Barrio, Posadas.</h3>
                    </div>
                </div>
            </div>

        </>
    )
}