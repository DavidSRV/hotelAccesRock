import { ServicioHabitacion } from "../../services/ServicioHabitacion";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useId } from "../../context/IdProvider";
import nick from "../../assets/img/logo-Nickelodeon.png"

export default function Habitaciones() {
  const [estadoCarga, setEstadoCarga] = useState(true);
  const [habitaciones, setHabitacion] = useState(null);
 
  const {setId} = useId()
  
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
    
<div className="">
  <div className="container-fluid my-5">
    <div className="row">
      <div className="col-12">
        <h1 style={{ color:"white" , textAlign:"center"}}>Reserva ya tu habitacion</h1>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-2 g-2">
      {habitaciones.datos.map(function (habitacion) {
        return (
          <>
            <div className="col">
              <div className="card h-80">
                <img
                  src={habitacion.imagenes[0]}
                  alt="img"
                  height="200px"
                  className=""
                />
                <h3 className="text-center">{habitacion.nombre}</h3>
                <p className="mx-2">{habitacion.descripcion}</p>
                <h2 className="text-start">${habitacion.valorNoche}</h2>
                <div className="mx-3 d-inline">
                  <i className="bi bi-person-fill"></i>
                  <i className="bi bi-person-fill"></i>
                  <i className="bi bi-person-fill"></i>                  <i className="bi bi-person-fill"></i>
                  <i className="bi bi-person-fill"></i>
                </div>
              <button style={{color: "white"  ,background: "hsl(24, 90%, 50%)",}} onClick={() => {
                setId(habitacion._id)
                Swal.fire({
                    position: 'center',
                    icon: "success",
                    title:'Habitacion Seleccionada',
                    showConfirmButton: false,
                    timer: 2500
                })
              }} className="btn ">Reservar</button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  </div>
</div>
);
}
}
