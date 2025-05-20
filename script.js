const dateElement = document.getElementById("datetime");

function updateDateTime() {
  const now = new Date();
  dateElement.textContent = `Nous sommes le ${now.toLocaleDateString()} à ${now.toLocaleTimeString()}`;
}

updateDateTime(); // première exécution
setInterval(updateDateTime, 1000); // mise à jour toutes les secondes (1000 ms = 1 s)
