import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
function Main17() {
    return (
        <>
            <div className="fala">
                <input type="radio" name="option1" />solo fecha de inicio<br />
                <label for="date" className="copila">Seleccionar Fecha</label>
                <input type="date" id="date" />
                <p></p>
                <input type="radio" name="option1" />Periodo exacto<br />
                <label for="date" className="copila">Fecha de inicio</label>
                <input type="date" id="date" />
                <p></p>
                <label for="date" className="copila">Fecha final</label>
                <input type="date" id="date" />
                <p></p>
                <input type="radio" name="option1" />Temporada<br />
                <label for="date" className="copila">Fecha de inicio</label>
                <input type="date" id="date" />
                <p></p>
                <label for="date" className="copila">Fecha final</label>
                <input type="date" id="date" />
            </div>

            <div>
                <Link to="/" className="text-decoration-none">
                <button>Establecer</button>
                </Link>
            </div>
        </>

    )
};
export default Main17;