import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext'
import { Link } from "react-router-dom"


export default function Form() {
  //utilizamos histori con la funcion useNavigate para redireccion al usuario a otra ruta
  const navigate = useNavigate();

  const { singUp, isAuthenticated, errors: RegisterErrors } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      return navigate("/inicio")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isAuthenticated])

  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  //set campos del formulario
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password2: ""
    },
    //validacion
    validationSchema: Yup.object({
      name: Yup.string().required("Debe ingresar su Nombre"),
      email: Yup.string()
        .email("Debe ingresar un correo electrónico válido")
        .required("Debe ingresar su correo")
        .matches(
          /^(?=.*[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|icloud)\.(com|es|co|uk|...))/,
          "Ingrese una dirección de correo electrónico válido (gmail, hotmail, outlook, icloud)"
        ),
      password: Yup.string()
        .required("Debe ingresar su contraseña")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
          "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número"
        )
        .min(8, "La contraseña debe tener al menos 8 caracteres"),
      password2: Yup.string()
        .required("Debe confirmar su contraseña")
        .oneOf(
          [Yup.ref("password"), null],
          "Las contraseñas deben coincidir"
        ),
    }),
    //Evento submit
    onSubmit: async (values) => {
      try {
        singUp(values)
      } catch (error) {

        console.log(error);
      }
    },
  });

  //Funcion para la barra de que indica la seguridad de la contraseña
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

  // Esta función maneja eventos de cambio en el campo de contraseña del formulario.
  const handlePasswordChange = (event) => {
    // Extraer el valor de la contraseña ingresada por el usuario.
    const password = event.target.value;

    // Calcular la fortaleza de la contraseña y almacenarla en 'strength'.
    const strength = calculatePasswordStrength(password);

    // Actualizar el estado interno con la fortaleza calculada para mostrar al usuario.
    setPasswordStrength(strength);

    // Utilizar 'formik' para gestionar el cambio en el valor del campo del formulario.
    formik.handleChange(event);
  };

  //formulario:

  return (

    <form onSubmit={formik.handleSubmit} className="h-screen">

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
              placeholder="Ingrese su nombre"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-600 mt-2">{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label className="text-lg font-medium">Correo electronico.</label>
            <input
              type="text"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingrese su correo electronico."
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
                name="password"
                onChange={handlePasswordChange} // Utiliza handlePasswordChange para calcular la fortaleza
                value={formik.values.password}
              />
              <button
                type="button"
                className="absolute right-4 top-6 text-gray-600 hover:text-gray-900"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600 mt-2">
                {formik.errors.password}
              </div>
            ) : null}
            <div className="mt-2"></div>
          </div>

          <div>
            <label className="text-lg font-medium">Confirmar Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Repita su contraseña."
                name="password2"
                onChange={formik.handleChange}
                value={formik.values.password2}
              />

              <div className="m-5 text-sm text-gray-600">
                Fortaleza de la contraseña:
              </div>
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
            {formik.touched.password2 && formik.errors.password2 ? (
              <div className="text-red-600 mt-2">
                {formik.errors.password2}
              </div>
            ) : null}
          </div>
          {RegisterErrors && <div className="text-red-600 my-5">{RegisterErrors}</div>}
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              type="submit"
              className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-3 rounded-xl  bg-blue-500 text-white text-lg font-bold  hover:bg-blue-600"
            >
              Registrarme
            </button>
          </div>
          <div className="mt-8 flex justify-center items-center">
                    <p className="font-medium text-base">¿Ya tienes una cuenta?</p>
                    <Link to={'/ingresar'} className="text-blue-400 text-base font-medium ml-2 hover:text-blue-600">Ingresar</Link>
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
