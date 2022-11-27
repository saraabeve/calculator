function info(): void {}

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
function configSettings() {
  const data = window.location.search;
  let params = new URLSearchParams(data);
  const colors = params.get("colors");
  const fonts = params.get("fonts");
  const mode = params.get("mode");
  if (colors) {
    document.body.style.background = colors;
  }
  if (fonts) {
    document.body.style.font = fonts;
  }
  if (mode === "dark") {
    let element: any = document.body;
    element.classList.toggle("darkmode");
  }
}

//event listeners:
document.getElementById("light").addEventListener("click", lightOn);
document.getElementById("info").addEventListener("click", info);
document.getElementById("history").addEventListener("click", historyDisplay);
document.getElementById("scimode").addEventListener("click", scienceDisplay);
document.getElementById("config").addEventListener("click", openform);
document.addEventListener("DOMContentLoaded", configSettings);
//
