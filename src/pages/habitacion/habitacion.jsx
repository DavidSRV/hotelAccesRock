import { ServicioHabitacion } from "../../services/ServicioHabitacion";
import { useEffect, useState } from "react";

export default function Habitacion() {
  const [estadoCarga, setEstadoCarga] = useState(true);
  const [habitaciones, setHabitacion] = useState(null);

  useEffect(() => {
    ServicioHabitacion().then((res) => {
      setHabitacion(res);
      setEstadoCarga(false);
    });
  }, []);

  if (estadoCarga) {

    return(
      <>
      <h1>Estoy Trabajando...</h1>
    </>
    );
   
  }else {
    return (
        <div>
           {/* se accede a la logica con las {}, recorrer el json*/}
            { habitaciones.datos.map(function(habitacion){
                return (
                    <div>
                        <h1>{habitacion.nombre}</h1>
                        <img alt="Habitación" src={habitacion.imagenes[0]}></img>
                    </div>
                )
            })
            } 
        </div>
    )
  }  
}

