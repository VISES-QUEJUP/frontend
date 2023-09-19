import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const history = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      contraseña1: "",
      contraseña2: "",
    },

    validationSchema: Yup.object({
      nombre: Yup.string().required("Debe ingresar su nombre"),
      email: Yup.string()
        .email("Debe ingresar un correo electrónico válido")
        .required("Debe ingresar su correo"),
      contraseña1: Yup.string()
        .required("Debe ingresar su contraseña")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
          "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número"
        )
        .min(8, "La contraseña debe tener al menos 8 caracteres"),
      contraseña2: Yup.string()
        .required("Debe confirmar su contraseña")
        .oneOf([Yup.ref("contraseña1"), null], "Las contraseñas deben coincidir"),
    }),

    onSubmit: (data) => {
      console.log(data)
      history("/ingresar");
    },
  });
    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) {
      strength += 30;
    }

    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
      strength += 30;
    }

    if (/\d/.test(password)) {
      strength += 20;
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      strength += 20;
    }

    return strength;
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    const strength = calculatePasswordStrength(password);
    setPasswordStrength(strength);
    formik.handleChange(event);
  };

  return (
    <form onSubmit={formik.handleSubmit}  className="h-screen">
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
        <h1 className="text-5xl font-semibold text-center mb-8">Registro</h1>
        <div className="w-full h-1 bg-gradient-to-tr from-green-400 to-blue-400 rounded-full" />
        <p className="font-medium text-lg text-gray-500 mt-5 text-center">
          A continuación, ingrese sus datos:
        </p>
        <div className="mt-8">

                    <div>
                        <label className="text-lg font-medium">Nombre</label>
                        <input
                            type="text"
                            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                            placeholder="Ingrese su nombre."
                            name="nombre"
                            onChange={formik.handleChange}
                            value={formik.values.nombre}
                        />
                        {formik.touched.nombre && formik.errors.nombre ? (
                            <div className="text-red-600 mt-2">{formik.errors.nombre}</div>
                        ) : null}
                    </div>

                    <div>
                        <label className="text-lg font-medium">Email</label>
                        <input
                            type="text"
                            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                            placeholder="Ingrese su email."
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-600 mt-2">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div>
                        <label className="text-lg font-medium">Contraseña</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Ingrese su contraseña."
                                name="contraseña1"
                                onChange={handlePasswordChange} // Utiliza handlePasswordChange para calcular la fortaleza
                                value={formik.values.contraseña1}
                            />
                            <button
                                type="button"
                                className="absolute right-4 top-6 text-gray-600 hover:text-gray-900"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? "Ocultar" : "Mostrar"}
                            </button>
                        </div>
                        {formik.touched.contraseña1 && formik.errors.contraseña1 ? (
                            <div className="text-red-600 mt-2">{formik.errors.contraseña1}</div>
                        ) : null}
                        <div className="mt-2">
                        </div>
                    </div>

                    <div>
                        <label className="text-lg font-medium">Confirmar Contraseña</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Repita su contraseña."
                                name="contraseña2"
                                onChange={formik.handleChange}
                                value={formik.values.contraseña2}
                            />
                            
                            <div className="m-5 text-sm text-gray-600">Fortaleza de la contraseña:</div>
                            <div className="w-full h-2 mt-1 bg-gray-300 rounded-full">
                                <div
                                    className={`h-full rounded-full ${strengthColor(
                                        passwordStrength
                                    )}`}
                                    style={{ width: `${passwordStrength}%` }}
                                />
                            </div>
                            <button
                                type="button"
                                className="absolute right-4 top-6 text-gray-600 hover:text-gray-900"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? "Ocultar" : "Mostrar"}
                            </button>
                        </div>
                        {formik.touched.contraseña2 && formik.errors.contraseña2 ? (
                            <div className="text-red-600 mt-2">{formik.errors.contraseña2}</div>
                        ) : null}
                    </div>
                    <div className="mt-8 flex flex-col gap-y-4">
                        <button
                            type="submit"
                            className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-3 rounded-xl  bg-blue-500 text-white text-lg font-bold  hover:bg-blue-600"
                        >
                            Registrarme
                        </button>
                      </div>
                </div>
            </div>
        </form>
    );
}

// Función para determinar el color de la barra de fortaleza de la contraseña
function strengthColor(strength) {
    if (strength >= 70) {
        return "bg-green-500";
    } else if (strength >= 40) {
        return "bg-yellow-500";
    } else {
        return "bg-red-500";
    }
}
