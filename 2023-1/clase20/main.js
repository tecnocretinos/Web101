const loggedUser = localStorage.getItem("loggedUser")
if(loggedUser === null) {
    window.location.href = "./index.html"
}