import { useState } from "react";
import { ServicioReserva } from "../../services/ServicioReserva";
import Swal from "sweetalert2";

export default function Form({ idHabitacion }) {
  const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");
  const [numAdultos, setNumAdultos] = useState("");
  const [numBendi, setNumBendi] = useState("");

  const EnvioForm = (e) => {
    e.preventDefault();
    let data = {
      idHabitacion: idHabitacion,
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
        className="w-25 mt-5 "
        style={{
          background: "black",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
          color: "white",
        }}
        onSubmit={EnvioForm}
      >
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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

        <button type="submit" class="btn btn-primary">
          Reservar
        </button>
      </form>
    </div>
  );
}
