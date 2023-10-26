import axios from "./axios.js";

export const registrarse = (user) => axios.post("/user", user);

export const iniciarSesion = (user) => axios.post("/user/login", user);

export const setQueja = (formdata) => axios.post("/queja", formdata);

export const getPublicaciones = () => axios.get("/publicacion");

export const verificarToken = () => axios.get("/verificacion");

