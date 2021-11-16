import { cerrarSesion } from './cerrarSesion.js';
import { obtenerInfoPueblo } from './components/puebloInfo.js';

window.onload = () => {
    const sesion = document.getElementById('cerrarSesion');
    sesion.onclick = cerrarSesion;
    cargarPueblos();
};

const peticionPueblo = async () => {
    const response = await fetch('http://localhost:3000/towns');
    const pueblos = await response.json();
    return pueblos.towns;
};

const cargarPuebloInfo = (id) => {
    const pueblos = document.getElementById('pueblos');
    pueblos.innerHTML = obtenerInfoPueblo;
};

const listadoPueblos = (pueblo) => {
    return `
      <section class="row mb-4"">
          <div class="col-md-4">
              <img
                  src="../pueblito.jpg"
                  class="fullsize img-fluid rounded-start"
                  alt="..."
              />
          </div>
          <div class="col-md-8">
              <div class="card-body">
                  <h5 class="card-title">${pueblo.name}</h5>
                  <p class="card-text">
                      ${pueblo.description}
                      se localiza dentro de ${pueblo.state} en ${pueblo.location}
                  </p>
                  <p class="alert alert-primary">Temperatura actual: ${pueblo.temperatura}°C</p>
                  <button class="btn btn-link vermas" id=${pueblo._id}>
                      ver más
                  </button>
              </div>
          </div>
      </section>
  `;
};

const getWeather = async (puebloName) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${puebloName}&appid=10c3d77de0fedd67213ff6cae25887c1`;
    const response = await fetch(URL);
    const weather = await response.json();
    const temperatura = weather.main.temp;
    const celsius = (temperatura - 273.15).toFixed(2);
    return celsius;
};

const cargarPueblos = async () => {
    const listaPueblos = document.getElementById('listaPueblos');
    peticionPueblo().then((pueblos) => {
        for (let i = 0; i < pueblos.length; i++) {
            getWeather(pueblos[i].name).then((temperatura) => {
                pueblos[i].temperatura = temperatura;
                listaPueblos.innerHTML += listadoPueblos(pueblos[i]);
                let verMas = document.getElementById(pueblos[i]._id);
                verMas.onclick = cargarPuebloInfo;
            });
        }
    });
};
