const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navber')

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}
// ---------------------------sprodect------------------------------------
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
}
// ------------------------------------sprodect1------------------------
  var MainImg1 = document.getElementById("MainImg1");
var smallimg1 = document.getElementsByClassName("small-img1");

smallimg1[0].onclick = function () {
    MainImg1.src = smallimg1[0].src;
}
smallimg1[1].onclick = function () {
    MainImg1.src = smallimg1[1].src;
}
smallimg1[2].onclick = function () {
    MainImg1.src = smallimg1[2].src;
}
smallimg1[3].onclick = function () {
    MainImg1.src = smallimg1[3].src;
}
// ------------------------login------------------
  let isLogin = true;

    function toggleForm() {
      isLogin = !isLogin;
      document.getElementById("formTitle").textContent = isLogin ? "Login" : "Sign Up";
      document.getElementById("nameField").classList.toggle("hidden", isLogin);
      document.getElementById("submitBtnText").textContent = isLogin ? "Login" : "Sign Up";
      document.getElementById("toggleText").textContent = isLogin
        ? "Don’t have an account?"
        : "Already have an account?";
      document.getElementById("toggleBtn").textContent = isLogin ? "Sign Up" : "Login";
    }

    function openModal() {
      document.getElementById("modal").classList.remove("hidden");
    }

    function closeModal() {
      document.getElementById("modal").classList.add("hidden");
    }
