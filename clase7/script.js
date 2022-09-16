function calculateNotes(note1, note2, note3) {
  const sum = note1 + note2 + note3;
  const avrg = sum / 3;
  if (avrg >= 3) {
    document.getElementById("title").innerHTML = "Felicidades, pasaste";
    document.getElementById("title").style.color = "green";
  } else {
    document.getElementById("title").innerHTML =
      "Lo siento, nos vemos el próximo semestre";
    document.getElementById("title").style.color = "red";
  }
}

const note1 = 3;
const note2 = 3;
const note3 = 3;
calculateNotes(note1, note2, note3);
