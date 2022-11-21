function info(): void {
  fetch("/info.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("popup").innerHTML = text));
}
// toggle the dark and light mode
function mode(): void {
  let element: any = document.body;
  element.classList.toggle("darkmode");
}

function lightOn(): void {
  let Element: any = document.body;
  Element.classList.toggle("lighton");
}
function historyDisplay() {
  let Element: any = document.body;
  Element.classList.toggle("showHistory");
}
function scienceDisplay() {
  let Element: any = document.body;
  Element.classList.toggle("showSciense");
}
function openform() {
  window.location.href = "/config.html";
}

//event listeners:
document.getElementById("light").addEventListener("click", lightOn);
document.getElementById("info").addEventListener("click", info);
document.getElementById("history").addEventListener("click", historyDisplay);
document.getElementById("scimode").addEventListener("click", scienceDisplay);
document.getElementById("config").addEventListener("click", openform);
