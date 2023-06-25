const textElement = document.getElementById('text');
const text = "ciento ochenta\n\n y nueve\n\n seis horas\n\n 8 minutos\n\nEl poema acaba";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    if (text.charAt(index) === '\n') {
      textElement.innerHTML += '<br><br>'; // Agrega saltos de línea como párrafos
    } else {
      textElement.innerHTML += text.charAt(index);
    }
    index++;
    setTimeout(typeWriter, 75); // Ajusta el tiempo de escritura aquí (en milisegundos)
  }
}

typeWriter();
// Establecer la fecha de finalización del contador (puedes ajustarla según tus necesidades)
const endDate = new Date('2023-12-31 23:59:59');

function updateCountdown() {
  const now = new Date();
  const timeLeft = endDate - now;

  // Calcular los días, horas, minutos y segundos restantes
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Actualizar el contenido del elemento de cuenta regresiva
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Actualizar el reloj cada segundo
  setTimeout(updateCountdown, 1000);
}

// Iniciar la cuenta regresiva
updateCountdown();