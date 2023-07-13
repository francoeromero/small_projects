function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    let formattedDate = date.toLocaleDateString();

    document.getElementById("clock").innerHTML = time + "<br>" + formattedDate;
  }

  setInterval(displayTime, 1000); // Actualizar cada segundo