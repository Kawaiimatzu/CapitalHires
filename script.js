const header = document.querySelector(".header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

  let currentScroll = window.pageYOffset;

  /* HIDE HEADER */

  if(currentScroll > lastScroll && currentScroll > 80){

    header.classList.add("hide");

  }else{

    header.classList.remove("hide");

  }

  /* SHRINK HEADER */

  if(currentScroll > 50){

    header.classList.add("scrolled");

  }else{

    header.classList.remove("scrolled");

  }

  lastScroll = currentScroll;

});


const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){
    topBtn.style.display = "block";
  }else{
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});



/* SUPPORT CARD TOGGLE */

const toggleBtns = document.querySelectorAll(".toggle-btn");

toggleBtns.forEach((btn)=>{

  btn.addEventListener("click",()=>{

    const card = btn.parentElement;

    card.classList.toggle("active");

    if(card.classList.contains("active")){
      btn.innerText = "View Less";
    }else{
      btn.innerText = "View Full Details";
    }

  });

});

emailjs.init("Cmb3XCHZPVMRY4rSM");

const taskForm = document.getElementById("taskForm");

taskForm.addEventListener("submit", function(e){

  e.preventDefault();

  emailjs.sendForm(
    "service_w4v9dkb",
    "template_8e7dw7s",
    this
  )

  .then(() => {

    alert("Task submitted successfully!");

    taskForm.reset();

  })

  .catch((error) => {

    alert(JSON.stringify(error));
    console.log(error);

  });

});

/* MOBILE MENU */

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});