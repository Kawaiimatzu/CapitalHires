const form = document.getElementById("taskForm");
const button = form.querySelector("button");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const originalText = button.innerHTML;

  // LOADING
  button.disabled = true;
  button.innerHTML = "Submitting...";

  try {

    await emailjs.sendForm(
      "service_w4v9dkb",
      "template_8e7dw7s",
      form
    );

    // SUCCESS BUTTON
    button.innerHTML = "✓ Submitted";

    // SHOW POPUP
    popup.classList.add("show");

    // RESET FORM
    form.reset();

    // REMOVE POPUP
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

