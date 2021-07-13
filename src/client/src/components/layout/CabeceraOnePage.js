import React from "react";
import { Link } from "react-router-dom";

const CabeceraOnePage = () => {
  return (
    <footer className="cabecera-One bg-yellow-500 py-4 ">
      <div className="max-w-7xl mx-auto border-red-400 items-center">
        <div className="flex justify-between">
          <Link to={"/"} 
          className="boton-login
          pl-3 md:pl-3 lg:pl-0
          ">
            LUNCH-TIME
          </Link>

          <div className="flex space-x-4 pr-0 md:pr-3 lg:pr-0">

            <Link to={"/login"} className="boton-login ">
              Login
            </Link>

            <nav className="inline justify-end space-x-3">
              

              <Link to={"/nueva-cuenta"} 
              className="boton-r
              bg-yellow-700
              p-4
              ">
                Registrarce
              </Link>
              
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CabeceraOnePage;
