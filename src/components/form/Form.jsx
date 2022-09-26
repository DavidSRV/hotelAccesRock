import { useState } from "react";
import { ServicioReserva } from "../../services/ServicioReserva";
import Swal from "sweetalert2";
import { useId } from "../../context/IdProvider";

export default function Form() {
  const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");
  const [numAdultos, setNumAdultos] = useState("");
  const [numBendi, setNumBendi] = useState("");

  const {id} = useId()

  const EnvioForm = (e) => {
    e.preventDefault();
    let data = {
      idHabitacion: id,
      fechaEntrada: entrada,
      fechaSalida: salida,
      numeroNinos: numBendi,
      numeroAdultos: numAdultos,
    };

    ServicioReserva(data).then(function (res) {
      console.log(res);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Exito en la reserva",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div>
      <form
        className="w-25 mt-5"
        style={{
          background: "hsl(24, 90%, 50%)",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
          color: "white",
          float:"left",
          maxWidth: "1440px",
          margin: "0 50px 0 0",
          fontWeight: "700",
          letterSpacing:"3px"
        }}
        onSubmit={EnvioForm}
      >
        <div class="mb-5">
          <label for="exampleInputEmail1" class="form-label">
            Fecha de Entrada
          </label>
          <input
            type="date"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEntrada(e.target.value);
            }}
            value={entrada}
          />
        </div>
        <div class="mb-5">
          <label for="exampleInputEmail1" class="form-label">
            Fecha de Salida
          </label>
          <input
            type="date"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setSalida(e.target.value);
            }}
            value={salida}
          />
        </div>
        <div class="mb-5">
          <label for="exampleInputEmail1" class="form-label">
            Número de Adultos
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            min={1}
            max={3}
            aria-describedby="emailHelp"
            onChange={(e) => {
              setNumAdultos(e.target.value);
            }}
            value={numAdultos}
          />
        </div>
        <div class="mb-5">
          <label for="exampleInputPassword1" class="form-label">
            Número de Bendiciones
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setNumBendi(e.target.value);
            }}
            value={numBendi}
          />
        </div>

        <button style={{backgroundColor:"white"}} type="submit" class="btn">
          Reservar
        </button>
      </form>
    </div>
  );
}
