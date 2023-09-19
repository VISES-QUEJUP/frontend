import img from '../images/buho.png'
import Registrar from '../components/Fromulario.Registro'
export default function Register() {
    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <Registrar />
            </div>
            <div className="hidden lg:flex h-full w-1/2 bg-white items-center justify-center">
                <img src={img} alt="imagen" />
            </div>
        </div>
    )
}