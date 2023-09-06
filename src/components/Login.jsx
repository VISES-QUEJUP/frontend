import Form from "./Form"
import img from "../image/buho.png"
export default function Login_Logo() {
    return(
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
            <Form/>
            </div>
            <div className="hidden lg:flex h-full w-1/2 bg-white items-center justify-center">
                <img src={img} alt="imagen"/>
            </div>
        </div>
    )
}