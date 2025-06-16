// =====================
//  HORARIOS Y CITAS
// =====================
let horarios = [
    "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00",
    "17:00", "18:00", "19:00"
];
let horariosOcupados = [];

function actualizarHorarios() {
    const select = document.getElementById('hora');
    const disponibilidad = document.getElementById('disponibilidad');
    select.innerHTML = '';
    disponibilidad.innerHTML = '';
    horarios.forEach(hora => {
        if (!horariosOcupados.includes(hora)) {
            let option = document.createElement('option');
            option.value = hora;
            option.textContent = hora;
            select.appendChild(option);

            let li = document.createElement('li');
            li.textContent = hora + " (Disponible)";
            disponibilidad.appendChild(li);
        }
    });
    if (select.options.length === 0) {
        let li = document.createElement('li');
        li.textContent = "No hay horarios disponibles";
        disponibilidad.appendChild(li);
    }
}

function pedirCita() {
    const select = document.getElementById('hora');
    const mensajeDiv = document.getElementById('mensaje');
    if (select.value === '') {
        mensajeDiv.textContent = 'Por favor selecciona una hora.';
        return;
    }
    const horaSeleccionada = select.value;
    horariosOcupados.push(horaSeleccionada);
    actualizarHorarios();

    const numeroWhatsApp = '573043677730'; 
    const mensaje = encodeURIComponent(`Hola, quiero reservar una cita en la Barbería Prados del Campo para las ${horaSeleccionada}.`);
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    mensajeDiv.innerHTML = `
        <span style="color:green;">¡Cita reservada para las ${horaSeleccionada}!</span><br>
        <a href="${url}" target="_blank">Haz clic aquí para enviar confirmación por WhatsApp</a>
    `;
}

document.addEventListener('DOMContentLoaded', actualizarHorarios);

// =====================
//   OPCIONAL: BARRA DE BÚSQUEDA INACTIVA TEMPORALMENTE
// =====================

document.getElementById('search-form').addEventListener('submit', function(e){
    e.preventDefault();
    // La búsqueda está desactivada por ahora
    return false;
});

// =====================
//   EFECTO HEADER SCROLL
// =====================

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
});