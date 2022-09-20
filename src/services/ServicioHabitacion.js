export async function ServicioHabitacion() {
  //1. URI DEL SERVICIO
  const URI = "https://servercomfama.herokuapp.com/viajescomfama/habitaciones";

  //2. CONFIGURAR LA PETICION
  const PETICION = {
    method: "GET",
  };

  //3.CONSUMO

  let respuesta = await fetch(URI, PETICION);
  let datos = await respuesta.json();

  return datos;
}
