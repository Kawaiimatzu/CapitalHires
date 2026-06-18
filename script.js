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

const form = document.getElementById("taskForm");
const button = form.querySelector("button");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const originalText = button.innerHTML;

  button.disabled = true;
  button.innerHTML = "Submitting...";

  try {

    await emailjs.sendForm(
      "service_w4v9dkb",
      "template_8e7dw7s",
      form
    );

    button.innerHTML = "✓ Submitted";

    popup.classList.add("show");

    form.reset();

    setTimeout(() => {

      popup.classList.remove("show");

      button.disabled = false;
      button.innerHTML = originalText;

    }, 3000);

  } catch(error){

    button.innerHTML = "Something went wrong";

    setTimeout(() => {

      button.disabled = false;
      button.innerHTML = originalText;

    }, 2500);

    console.log(error);

  }

});

/* MOBILE MENU */

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});



/* CHAT OPEN/CLOSE */

const toggle = document.getElementById("chat-toggle");
const chatbot = document.getElementById("chatbot");

if(toggle && chatbot){

toggle.addEventListener("click", () => {

chatbot.classList.toggle("show");

});

}

/* CHATBOT */

function reply(type){

const chat =
document.getElementById("chat-messages");

/* GREAT GOT IT */

if(type === "gotit"){

/* USER REPLY */

chat.insertAdjacentHTML("beforeend",`

<div class="user-row">

<div class="user-bubble">

Great, got it!

</div>

</div>

`);

/* BOT REPLY */

setTimeout(()=>{

chat.insertAdjacentHTML("beforeend",`

<div class="message-row">

<img
src="images/bot.png"
class="bot-avatar">

<div class="bot-bubble">

Terrific. Now to better understand how I can help you today, are you a new or existing customer?

<div class="quick-buttons">

<button onclick="reply('new')">
New Visitor
</button>

<button onclick="reply('existing')">
Existing Client
</button>

</div>

</div>

</div>

`);

chat.scrollTop = chat.scrollHeight;

},600);

}

/* NEW VISITOR */

if(type === "new"){

/* USER REPLY */

chat.insertAdjacentHTML("beforeend",`

<div class="user-row">

<div class="user-bubble">

New Visitor

</div>

</div>

`);

/* BOT REPLY */

setTimeout(()=>{

chat.insertAdjacentHTML("beforeend",`

<div class="message-row">

<img
src="images/bot.png"
class="bot-avatar">

<div class="bot-bubble">

Great! What can we help you with today?

<div class="quick-buttons">

<button onclick="reply('va')">
Hire A VA
</button>

<button onclick="reply('website')">
Website Design
</button>

<button onclick="reply('task')">
Task To Go
</button>

<button onclick="reply('call')">
Book A Call
</button>

</div>

</div>

</div>

`);

chat.scrollTop = chat.scrollHeight;

},600);

}

/* EXISTING CLIENT */

if(type === "existing"){

/* USER REPLY */

chat.insertAdjacentHTML("beforeend",`

<div class="user-row">

<div class="user-bubble">

Existing Client

</div>

</div>

`);

/* BOT REPLY */

setTimeout(()=>{

chat.insertAdjacentHTML("beforeend",`

<div class="message-row">

<img
src="images/bot.png"
class="bot-avatar">

<div class="bot-bubble">

Welcome back!

<br><br>

Please contact us at:

<br><br>

<a href="mailto:info@capitalhires.com">

info@capitalhires.com

</a>

</div>

</div>

`);

chat.scrollTop = chat.scrollHeight;

},600);

}

/* BUTTON ACTIONS */

if(type === "va"){

/* USER REPLY */

chat.insertAdjacentHTML("beforeend",`

<div class="user-row">

<div class="user-bubble">

Hire A VA

</div>

</div>

`);

/* BOT REPLY */

setTimeout(()=>{

chat.insertAdjacentHTML("beforeend",`

<div class="message-row">

<img
src="images/bot.png"
class="bot-avatar">

<div class="bot-bubble">

Our Real Estate Virtual Assistants are trained to support realtors, brokers, lenders, and mortgage professionals.

<br><br>

Services include:

<br><br>

✓ CRM Management<br>
✓ Lead Generation<br>
✓ Administrative Support<br>
✓ Social Media Management<br>
✓ Transaction Coordination

<br><br>

Ready to get started?

<div class="quick-buttons">

<button onclick="window.open('hireavaform/','_blank')">

Apply Here

</button>

</div>

</div>

</div>

`);

chat.scrollTop =
chat.scrollHeight;

},600);

}

if(type === "website"){

/* USER REPLY */

chat.insertAdjacentHTML("beforeend",`

<div class="user-row">

<div class="user-bubble">

Website Design

</div>

</div>

`);

/* BOT REPLY */

setTimeout(()=>{

chat.insertAdjacentHTML("beforeend",`

<div class="message-row">

<img
src="images/bot.png"
class="bot-avatar">

<div class="bot-bubble">

We design modern websites for real estate professionals, mortgage brokers, lenders, and service-based businesses.

<br><br>

Our websites include:

<br><br>

✓ Professional Design<br>
✓ Mobile Responsive Layout<br>
✓ Lead Capture Forms<br>
✓ Calendly Integration<br>
✓ SEO Friendly Pages<br>
✓ Fast Loading Performance

<br><br>

Book a free consultation to discuss your project.

<div class="quick-buttons">

<button onclick="window.open('https://calendly.com/capitalhires/30min','_blank')">

Book Consultation

</button>

</div>

</div>

</div>

`);

chat.scrollTop =
chat.scrollHeight;

},600);

}

if(type === "task"){

document.getElementById("task")
.scrollIntoView({
behavior:"smooth"
});

}

if(type === "call"){

/* USER REPLY */

chat.insertAdjacentHTML("beforeend",`

<div class="user-row">

<div class="user-bubble">

Book A Call

</div>

</div>

`);

/* BOT REPLY */

setTimeout(()=>{

chat.insertAdjacentHTML("beforeend",`

<div class="message-row">

<img
src="images/bot.png"
class="bot-avatar">

<div class="bot-bubble">

Let's schedule a quick consultation.

<br><br>

During the call, we'll discuss:

<br><br>

✓ Your business goals<br>
✓ Current workflow challenges<br>
✓ Tasks you can delegate<br>
✓ The best support solution for your business

<br><br>

Choose a time that works best for you.

<div class="quick-buttons">

<button onclick="window.open('https://calendly.com/capitalhires/30min','_blank')">

Schedule Call

</button>

</div>

</div>

</div>

`);

chat.scrollTop =
chat.scrollHeight;

},600);

}

chat.scrollTop =
chat.scrollHeight;

}


function sendMessage(){

const input =
document.getElementById("userInput");

const message =
input.value.trim();

if(!message) return;

const chat =
document.getElementById("chat-messages");

/* USER MESSAGE */

chat.insertAdjacentHTML("beforeend", `

<div class="user-row">

<div class="user-bubble">

${message}

</div>

</div>

`);

/* BOT REPLY */

setTimeout(() => {

chat.insertAdjacentHTML("beforeend", `

<div class="message-row">

<img
src="images/bot.png"
class="bot-avatar">

<div class="bot-bubble">

To help you faster, please select one of the options below.

<div class="quick-buttons">

<button onclick="reply('new')">
New Visitor
</button>

<button onclick="reply('existing')">
Existing Client
</button>

</div>

</div>

</div>

`);

chat.scrollTop =
chat.scrollHeight;

}, 600);

input.value = "";

}

/* ENTER KEY SUPPORT */

const userInput =
document.getElementById("userInput");

if(userInput){

userInput.addEventListener("keypress", function(e){

if(e.key === "Enter"){

e.preventDefault();

sendMessage();

}

});

}

const chatClose =
document.getElementById("chat-close");

if(chatClose){

chatClose.addEventListener("click",()=>{

chatbot.classList.remove("show");

});

}
