const form = document.getElementById("taskForm");
const button = form.querySelector("button");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const originalText = button.innerHTML;

  /* LOADING */
  button.disabled = true;
  button.innerHTML = "Submitting...";

  try {

    /* SEND TO CAPITALHIRES */
    await emailjs.sendForm(
      "service_w4v9dkb",
      "template_8e7dw7s",
      form,
      "Cmb3XCHZPVMRY4rSM"
    );

    /* AUTO REPLY TO CLIENT */
    await emailjs.sendForm(
      "service_szrjnqs",
      "template_rlaif0v",
      form,
      "N3FtA-4-Mm8FYPZCC"
    );

    /* SUCCESS BUTTON */
    button.innerHTML = "✓ Submitted";

    /* SHOW POPUP */
    popup.classList.add("show");

    /* RESET FORM */
    form.reset();

    setTimeout(() => {

      popup.classList.remove("show");

      button.disabled = false;
      button.innerHTML = originalText;

    }, 3000);

  } catch(error){

    console.log(error);

    button.innerHTML = "Something went wrong";

    setTimeout(() => {

      button.disabled = false;
      button.innerHTML = originalText;

    }, 2500);

  }

});