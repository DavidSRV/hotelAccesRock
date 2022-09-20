import {ServicioHabitacion} from '../services/ServicioHabitacion/ServicioHabitacion.js'
import {useEffect, useState} from 'react' //HOOKS

export function Habitaciones(){

    //USANDO EL USESTATE
    //(FUNCION ESPECIAL PARA CREAR VARIBLE GLOBAL DENTRO DEL COMPONENTE)
    const [estadoCarga, setEstadoCarga] = useState(true)
    const[habitaciones, setHabitacion] = useState(null)

    //USANDO EL USEEFECT
    //Funcion que controla el render(vista, lo que pinta) de un componente

    useEffect(function(){
    ServicioHabitacion()
   .then(function(respuesta){

    setHabitacion(respuesta)
    setEstadoCarga(false)
   })

    },[])

if(estadoCarga){


return (
    <>
    <h1>Estoy trabajando...</h1>
    </>
) 
}else {
    return (
        <div>
           {/* se accede a la logica con las {}, recorrer el json*/}
            { habitaciones.datos.map(function(habitacion){
                return (
                    <div>
                        <h1>{habitacion.nombre}</h1>
                        <img src={habitacion.imagenes[0]}></img>
                    </div>
                )
            })
            } 
        </div>
    )
  }  
}