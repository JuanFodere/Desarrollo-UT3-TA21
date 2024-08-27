const texto = document.getElementById("texto")

texto.addEventListener("focus", ()=> {
    texto.style.borderColor = "blue"
})

texto.addEventListener("blur", ()=> {
    texto.style.borderColor = "green"
})