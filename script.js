/* CURSOR */
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e=>{
cursor.style.left = e.pageX + "px";
cursor.style.top = e.pageY + "px";
});

/* THEME */
function toggleTheme(){
document.body.classList.toggle("light");
}

/* EMAIL FORM */
function sendMail(e){
e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

window.location.href=`mailto:deploylynx26@gmail.com?subject=Client from ${name}&body=${message} (${email})`;
}
