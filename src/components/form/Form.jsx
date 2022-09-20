export default function Form() {
  return (
    <div >
      <form className="w-50 mt-5"
        style={{ background: "black", padding: "30px", borderRadius: "20px", textAlign:'center', color:'white' }}
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
            aria-describedby="emailHelp"
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
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Reservar
        </button>
      </form>
    </div>
  );
}
