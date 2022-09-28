var contador = 0

function buttonClicked() {

  const value = document.getElementById("some").value
  if(value === "msantim") {
    console.log("Logged in")
  } else {
    console.log("Datos invalidos")
  }

}

function movingTheMouse(param) {
  if(param === "Over") {
    document.getElementById("title").style.backgroundColor = "red"
  } else {
    document.getElementById("title").style.backgroundColor = "transparent"
  }
}
