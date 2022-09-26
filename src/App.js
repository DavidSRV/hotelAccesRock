import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/NavBar';
import Habitacion from './pages/habitacion/habitacion';
import Inicio from './pages/inicio/Inicio';
import Reserva from './pages/reserva/Reserva';

function App() {

  return (
    <div className="App">
      <Navbar>
      </Navbar>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="reserva" element={<Reserva/>} />
          <Route path="habitacion" element={<Habitacion/>} />
        </Routes>
    </div>
  );
}

export default App;
