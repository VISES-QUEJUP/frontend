import { createContext, useState, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe estar dentro del AuthProvider");
    } else {
        return context;
    }
}
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [errors, setError] = useState(null)

    const singUp = async (Values) => {
        try {
            const res = await axios.post("http://localhost:3000/api/user", Values);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true)
        } catch (error) {
            console.error('Error en la solicitud de registro:', error.response.data.error);
            setError(error.response.data.error)
        }
    };




    return (
        <AuthContext.Provider value={{
            singUp,
            user,
            errors,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider >
    )

}