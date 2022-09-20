export function Formularioreserva(){
    return (   
        <>
        <form>
            <div className="row">
                <div className="col-12 col-md-8 text-white">
                <h3>RESERVA CON NOSOTROS</h3>
                <h5>Reserva ya!!!</h5>
                <hr></hr>
                </div>
            </div>
            <div className="row text-white fw-bold">
                <div className="col-12 col-md-4">
                <label for="basic-url" class="form-label">Fecha Entrada</label>
                <div class="input-group mb-3">
                <span class="input-group-text"><i class="bi bi-calendar-check"></i></span>
                <input type="date" class="form-control" placeholder="Username"/>
                </div>
                </div>
                <div className="col-12 col-md-4">
                <label for="basic-url" class="form-label">Fecha Salida</label>
                <div class="input-group mb-3">
                <span class="input-group-text"><i class="bi bi-calendar-check"></i></span>
                <input type="date" class="form-control" placeholder="Username"/>
                </div>
                </div>
            </div>
            <div className="row text-white fw-bold">
            <div className="col-12 col-md-4">
                <label for="basic-url" class="form-label">Numero Adultos</label>
                <div class="input-group mb-3">
                <span class="input-group-text"><i class="bi bi-people-fill"></i></span>
                               
                <select class="form-select" aria-label="Default select example">
                <option selected>Numero Adultos:</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>
                </div>
                </div>
                <div className="col-12 col-md-4">
                <label for="basic-url" class="form-label">Numero niños</label>
                <div class="input-group mb-3">
                <span class="input-group-text"><i class="bi bi-people-fill"></i></span>
                <select class="form-select" aria-label="Default select example">
                <option selected>Numero Niños:</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>
                </div>
                </div>
            </div>
            <button type="button" class="btn btn-info btn btn-outline-dark w-50 ms-5" >RESERVAR</button>
        </form>
        </>
        )
}