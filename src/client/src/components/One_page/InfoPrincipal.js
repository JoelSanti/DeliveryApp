import React from 'react';
import cocina from '../../assets/img/cocinaO.jpg'

const InfoPrincipal = () => {

    console.log(cocina);
    return (

        <div className="
        px-4 py-5
        lg:flex justify-between md:px-10 md:py-28
        bg-yellow-50
        
        ">

            <div className="
            
            md:w-1/2 md:my-28 md:mx-8 my-6 mx-3">
                <h3 className="text-2xl lg:text-5xl ">BIENVENIDO A</h3>
                <h1 className="
                mb-3
                text-5xl lg:text-8xl  md:mb-6
                ">LUNCH-TIME</h1>

                <p className="
                text-sm
                mb-5
                md:text-xl
                ">Gestiona tu restaurante, realiza tus pedidos 
                    de delivery y realiza entregas como un medio 
                    alternativo de ingresos.
                </p>
            </div>
           
            <div className="md:w-1/2">
                <img src={cocina}
                className="rounded shadow-2xl w-full"
                ></img>
            </div>

        </div>
     );
}
 
export default InfoPrincipal;