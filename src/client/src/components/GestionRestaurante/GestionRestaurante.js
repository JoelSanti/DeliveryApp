import React,{Fragment,useState} from 'react';
import Sidebar from '../layout/Sidebar';
import HeaderSidebar from '../layout/HeaderSidebar';


const GestionRestaurante = () => {

     const [cSidebar,visualizarSidebar] = useState(true)
     
  
    return ( 
        <Fragment>

       <div className="flex">
            {cSidebar ?
            <Sidebar visualizarSidebar={visualizarSidebar}/>
            :null
            }
           
            <div className="block w-full">
            <HeaderSidebar visualizarSidebar={visualizarSidebar} cSidebar={cSidebar}/>
            <div>principal</div>
            </div>
       </div>
        
        </Fragment>
     );
}
 
export default GestionRestaurante;