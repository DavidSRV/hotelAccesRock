import Form from "../../components/form/Form";
import Habitaciones from "../../components/habitaciones/Habitaciones";
import "./styleIncio.css";

export default function Inicio({idHabitacion}) {

  return (
    <div className="container">

      <Form idSeleccionado={idHabitacion}/>
      <Habitaciones />
    </div>
    
  );
}
