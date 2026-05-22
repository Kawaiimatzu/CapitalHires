
const form = document.getElementById("taskForm");
const button = form.querySelector("button");

/* SUCCESS POPUP */
const popup = document.createElement("div");

popup.innerHTML = "✓ Request Submitted Successfully";

popup.style.position = "fixed";
popup.style.top = "30px";
popup.style.right = "30px";
popup.style.background = "#0d6b3f";
popup.style.color = "#fff";
popup.style.padding = "16px 24px";
popup.style.borderRadius = "14px";
popup.style.fontWeight = "600";
popup.style.fontSize = "15px";
popup.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";
popup.style.opacity = "0";
popup.style.visibility = "hidden";
popup.style.transform = "translateY(-20px)";
popup.style.transition = "0.35s ease";
popup.style.zIndex = "99999";

document.body.appendChild(popup);

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const originalText = button.innerHTML;

  button.disabled = true;
  button.innerHTML = "Submitting...";

try{

/* SEND TO CAPITALHIRES */
await emailjs.sendForm(
  "service_w4v9dkb",
  "template_k0nlsfr",
  form,
  "Cmb3XCHZPVMRY4rSM"
);

/* AUTO REPLY TO CLIENT */
await emailjs.sendForm(
  "service_szrjnqs",
  "template_9y0ld4l",
  form,
  "N3FtA-4-Mm8FYPZCC"
);

  /* BUTTON SUCCESS */
  button.innerHTML = "✓ Submitted";

  /* SHOW POPUP */
  popup.style.opacity = "1";
  popup.style.visibility = "visible";
  popup.style.transform = "translateY(0)";

  /* RESET FORM */
  form.reset();

  setTimeout(() => {

    popup.style.opacity = "0";
    popup.style.visibility = "hidden";
    popup.style.transform = "translateY(-20px)";

    button.disabled = false;
    button.innerHTML = originalText;

  }, 3000);

}catch(error){

  console.log(error);

  button.innerHTML = "Something went wrong";

  setTimeout(() => {

    button.disabled = false;
    button.innerHTML = originalText;

  }, 2500);

}

});