function calcularResultado() {
    var puntuacion = 0;

    // Pregunta 1
    var q1 = document.getElementsByName("q1");
    for (var i = 0; i < q1.length; i++) {
      if (q1[i].checked && q1[i].value === "d") {
        puntuacion++;
      }
    }

    // Pregunta 2
    var q2 = document.getElementsByName("q2");
    for (var j = 0; j < q2.length; j++) {
      if (q2[j].checked && q2[j].value === "a") {
        puntuacion++;
      }
    }

    // Pregunta 3
    var q3 = document.getElementsByName("q3");
    for (var j = 0; j < q3.length; j++) {
      if (q3[j].checked && q3[j].value === "c") {
        puntuacion++;
      }
    }

    // Mostrar resultado
    var resultadoDiv = document.getElementById("resultado");
    var puntuacionP = document.getElementById("puntuacion");
    puntuacionP.textContent = "Puntuación: " + puntuacion + " / 3";
    resultadoDiv.style.display = "block";
  }