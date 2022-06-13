var modal = document.getElementById("myModal");
var modalR = document.getElementById("myModalR");
var modalU = document.getElementById("myModalU")


var btn = document.getElementById("mylogin");
var btnR = document.getElementById("myRegister");
var btnU = document.getElementById("Upload")


var span = document.getElementsByClassName("close")[0];
var spanR = document.getElementsByClassName("closeR")[0];
var spanU = document.getElementsByClassName("closeU")[0];


btn.onclick = function () {
  modal.style.display = "block";
}

btnR.onclick = function () {
  modalR.style.display = "block";
}
btnU.onclick = function () {
  modalU.style.display = "block";
}



span.onclick = function () {
  modal.style.display = "none";
}
spanR.onclick = function () {
  modalR.style.display = "none";
}
spanU.onclick = function () {
  modalU.style.display = "none";
}


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function (event) {
  if (event.target == modalR) {
    modalR.style.display = "none";
  }
}

window.onclick = function (event) {
  if (event.target == modalU) {
    modalU.style.display = "none";
  }
}

// const upload = document.getElementById("Upload")

// upload.addEventListener("click", uploadData);

// function uploadData() {

// }


