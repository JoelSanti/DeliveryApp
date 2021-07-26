import React,{useState,Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faConciergeBell, faHome, faUtensils } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({visualizarSidebar}) => {

    

    const xx =(e)=>{
        if (e === "cerrar") {
         visualizarSidebar(false)  
        } else {
         visualizarSidebar(true)  
        }
    }


    return (
<Fragment>
   
<div className="bg-gray-100 w-80 h-screen ">
        
        <div className=" flex justify-between px-8 py-4 items-center bg-gray-200 w-full">

            <h1 className="text-yellow-600">LUNCH TIME</h1>   
               
            <button
            onClick={() => xx('cerrar')}
            >X</button>   

        </div>

        <ul className="text-start mx-12 mt-10">
            <li><FontAwesomeIcon icon={faHome}/> Inicio</li>
            <li><FontAwesomeIcon icon={faConciergeBell}/> Menú</li>
            <li><FontAwesomeIcon icon={faClipboard}/> Lista de Pedidos</li>
           
        </ul>

</div> 
</Fragment>
);
    };
export default Sidebar;