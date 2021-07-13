import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import CabeceraOnePage from '../layout/CabeceraOnePage';
import comida from '../../assets/img/comida1.png'

const Login = () => {


     const [usuario,guardarUsuario]=useState({
          email:'',
          password:''
      })
      const {email,password} = usuario;
  
      const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
      }
  
      //Cuando el usuario quiere iniciar sesion 
      const onSubmit = e=>{
          e.preventDefault();
  
          //Validar que no aya campos vacion 
  
          //Pasarlo al action 
      }


    return ( 
         
<div className="h-screen bg-yellow-50"> 

     <CabeceraOnePage/>

          <div className="flex justify-center  bg-yellow-50">
     
          <div className="flex-row container max-w-sm bg-yellow-50 my-1">
             <div className="justify-center flex">
                 
                 <img src={comida}
                 className=' w-56 lg:w-96  justify-center'
                 ></img>
             </div>
             
             <h1 className="text-center py-5 text-4xl text-gray-600">Iniciar Sesion</h1>
     
             <form
             className="block space-y-4"
             onSubmit={onsubmit}
             >
                 <div className="flex mx-2  space-x-12 shadow-abajo my-3 py-1">
                     <label htmlFor="email"
                     className="text-yellow-500"
                     >
                         Email
                     </label>

                     <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="tu email"
                      value={email}
                      onChange={onChange}
                      className="bg-transparent outline-none  w-screen "
                     />

                 </div>
     
                 <div className="flex mx-2  space-x-5 shadow-abajo my-4 py-1">
                     <label htmlFor="password"
                     className="text-yellow-500"
                     >
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
     
                 <div className="text-center py-4">
                     <input type="submit" 
                     className=" shadow-lg px-3 py-2 rounded-full text-white
                     transition duration-500 ease-in-out bg-yellow-500 hover:bg-yellow-400 transform hover:-translate-y-1 hover:scale-110 ..."
                      value="Iniciar sesion"
                     />
                 </div>
     
             </form>

             <Link to={'/nueva-cuenta'} 
             className="block text-center py-2 text-gray-400
             
             ">
                 Aún no tienes una cuenta? Consíguela ahora
             </Link>
          </div>
      </div>
       
</div>   
     );
}
 
export default Login;