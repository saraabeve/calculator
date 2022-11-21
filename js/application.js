function info() {
  alert("sara abeve" + "\n" + "stage1" + "\n" + "this is an calculator app");
}
// toggle the dark and light mode
function mode() {
  element = document.body;
  element.classList.toggle("darkmode");
}

function displayButtonInfo(value) {
  document.getElementById("result");
}

//event listeners:
document.getElementById("light").addEventListener("click", mode);
document.getElementById("info").addEventListener("click", info);
