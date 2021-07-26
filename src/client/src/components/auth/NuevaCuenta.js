import React, { useState } from "react";
import { Link } from "react-router-dom";
import CabeceraOnePage from "../layout/CabeceraOnePage";
import cacerola from '../../assets/img/cacerola.png'

const NuevaCuenta = () => {
  const [usuario, guardarUsuario] = useState({
    restaurante:"",
    email: "",
    password:"",
    confirmar:"",
    descripcion:"",
    telefono:"",
    foto:"",
    direccion:"",
  });
  const { restaurante,email, password,confirmar,descripcion,telefono,foto ,direccion} = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario quiere iniciar sesion
  const onSubmit = (e) => {
    e.preventDefault();

    //Validar que no aya campos vacion

    //Pasarlo al action
  };
  return (
    <div className="h-screen bg-yellow-50">
      <CabeceraOnePage />

      <div className="flex justify-center space-x-7  bg-yellow-50">

        <div>
          <img src={cacerola}
          
          className="max-w-xs my-20 ">
          
          </img>
        </div>

        <div className="flex-row container max-w-sm bg-yellow-50 my-10">
          <h1 className="text-center py-5 text-4xl text-gray-600">
            Registrarse
          </h1>

          <form className="block space-y-4" onSubmit={onsubmit}>

            <div className="flex mx-2  space-x-4 shadow-abajo my-1 py-1">
              <label htmlFor="email" className="text-yellow-500">
                Restaurante
              </label>

              <input
                type="text"
                id="restaurante"
                name="restaurante"
                placeholder="Ej. Chifa Pollería Maná"
                value={restaurante}
                onChange={onChange}
                className="bg-transparent outline-none  w-screen "
              />
            </div>

            <div className="flex mx-2  space-x-4 shadow-abajo my-1 py-1">
              <label htmlFor="email" className="text-yellow-500">
                Dirección
              </label>

              <input
                type="text"
                id="direccion"
                name="direccion"
                placeholder="Jr Carlos Mariategui 231"
                value={direccion}
                onChange={onChange}
                className="bg-transparent outline-none  w-screen "
              />
            </div>

            <div className="flex mx-2  space-x-12 shadow-abajo my-3 py-1">
              <label htmlFor="email" className="text-yellow-500">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@gmail.com"
                value={email}
                onChange={onChange}
                className="bg-transparent outline-none  w-screen "
              />
            </div>

            <div className="flex mx-2  space-x-5 shadow-abajo my-4 py-1">
              <label htmlFor="password" className="text-yellow-500">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="tu password"
                value={password}
                onChange={onChange}
                className="outline-none bg-transparent w-screen "
              />
            </div>

            <div className="flex mx-2  space-x-5 shadow-abajo my-4 py-1">
              <label htmlFor="password" className="text-yellow-500">
                Confirmar
              </label>
              <input
                type="password"
                id="confirmar"
                name="confirmar"
                placeholder="Confirmar password"
                value={confirmar}
                onChange={onChange}
                className="outline-none bg-transparent w-screen "
              />
            </div>

            <div className="block mx-2  space-x-5 shadow-abajo my-4 py-1">
              <label htmlFor="password" className="text-yellow-500">
                Descripción
              </label>

            <textarea 
                type="text"
                id="descripcion"
                name="descripcion"
                placeholder="Ejm. Somos un restaurant reconocido,servimos comida de calidad y ofrecemos un exelente servicio al cliente"
                value={descripcion}
                onChange={onChange}
                className="outline-none bg-transparent  w-full">
                </textarea>
             
            </div>
            
            <div className="flex mx-2  space-x-5 shadow-abajo my-4 py-1">
              <label htmlFor="password" className="text-yellow-500">
                Telefono
              </label>

              <input
                type="text"
                id="telefono"
                name="telefono"
                placeholder=" 962 000 000"
                value={telefono}
                onChange={onChange}
                className="outline-none bg-transparent w-screen "
              />

            </div>

            <div className="flex mx-2  space-x-5 shadow-abajo my-4 py-1">
              <label htmlFor="password" className="text-yellow-500">
                Foto
              </label>

              <input
                type="file"
                id="foto"
                name="foto"
               
                value={foto}
                onChange={onChange}
                className="outline-none bg-transparent w-screen "
              />

            </div>

            <div className="text-center py-4">
              <input
                type="submit"
                className=" shadow-lg px-3 py-2 rounded-full text-white
                     transition duration-500 ease-in-out bg-yellow-500 hover:bg-yellow-400 transform hover:-translate-y-1 hover:scale-110 ..."
                value="Registrarse"
              />
            </div>


          </form>

          <Link
            to={"/login"}
            className="block text-center py-2 text-gray-400
             
             "
          >
            Iniciar Sesion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NuevaCuenta;
