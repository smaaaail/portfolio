const contactBtn = document.getElementById("contactBtn")
const form = document.getElementById("form");

const closeBtn = document.getElementById("close");

contactBtn.onclick = function (){
    form.style.display="flex";
}

closeBtn.onclick = function (){
    form.style.display="none";
}