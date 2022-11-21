function info() {
    fetch("/info.html")
        .then((response) => response.text())
        .then((text) => (document.getElementById("popup").innerHTML = text));
}
function mode() {
    let element = document.body;
    element.classList.toggle("darkmode");
}
function lightOn() {
    let Element = document.body;
    Element.classList.toggle("lighton");
}
function historyDisplay() {
    let Element = document.body;
    Element.classList.toggle("showHistory");
}
function scienceDisplay() {
    let Element = document.body;
    Element.classList.toggle("showSciense");
}
function openform() {
    window.location.href = "/config.html";
}
document.getElementById("light").addEventListener("click", lightOn);
document.getElementById("info").addEventListener("click", info);
document.getElementById("history").addEventListener("click", historyDisplay);
document.getElementById("scimode").addEventListener("click", scienceDisplay);
document.getElementById("config").addEventListener("click", openform);
