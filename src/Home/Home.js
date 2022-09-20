import './Home.css'
import { Formularioreserva } from '../Formularioreserva/Formularioreserva.js'
import { Actividades } from '../Actividades/Actividades'

export function  Home(){
    return(
        <>
        <div className='banner'>
        <Formularioreserva></Formularioreserva>
        </div>
        <div>
        <Actividades></Actividades>
        </div>
        </>
    )
}