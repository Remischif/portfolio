<<<<<<< HEAD
const dateElement = document.getElementById("datetime");

function updateDateTime() {
  const now = new Date();
  dateElement.textContent = `Nous sommes le ${now.toLocaleDateString()} à ${now.toLocaleTimeString()}`;
}

updateDateTime(); // première exécution
setInterval(updateDateTime, 1000); // mise à jour toutes les secondes (1000 ms = 1 s)
=======
const dateElement = document.getElementById("datetime");

function updateDateTime() {
  const now = new Date();
  dateElement.textContent = `Nous sommes le ${now.toLocaleDateString()} à ${now.toLocaleTimeString()}`;
}

updateDateTime(); // première exécution
setInterval(updateDateTime, 1000); // mise à jour toutes les secondes (1000 ms = 1 s)
>>>>>>> b402314719fc348cd0786e9c0c811a82ea400005
