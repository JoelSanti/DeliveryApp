import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HeaderSidebar = ({visualizarSidebar,cSidebar}) => {

    const xx =(e)=>{
        if (e === "abrir") {
         visualizarSidebar(true)  
        } else {
         visualizarSidebar(false)  
        }
    }

    return ( 
        <div className="justify-between bg-gray-100 h-14 flex pr-16">
            <div className="ml-10 my-auto">
                {!cSidebar ?
            <button 
            onClick={() => xx('abrir')}
            className='text-yellow-500'
            >
            <FontAwesomeIcon icon={faBars} className="text-2xl"/></button>
            :null }   

            </div>
            <div className="my-auto">
                <nav>login</nav>
            </div>
        </div>
     );
}
 
export default HeaderSidebar;