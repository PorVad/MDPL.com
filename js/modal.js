let modalWindow = document.getElementById("mdl-ankt");

document.getElementById("anketa").addEventListener("click", function() {
    modalWindow.classList.add("open");
})

document.getElementById("cls-btn").addEventListener("click", function() {
    modalWindow.classList.remove("open");
})

document.getElementById("cotn-btn").addEventListener("click", function() {
    window.location.href = "/anketa.html";
})