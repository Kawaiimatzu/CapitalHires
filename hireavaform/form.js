emailjs.init("Cmb3XCHZPVMRY4rSM");

const form = document.getElementById("taskForm");
const button = form.querySelector("button");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const originalText = button.innerHTML;

  button.disabled = true;
  button.innerHTML = "Submitting...";

  try {

    await emailjs.sendForm(
      "service_w4v9dkb",
      "template_k0nlsfr",
      form
    );

    button.innerHTML = "✓ Submitted";

    form.reset();

    setTimeout(() => {

      button.disabled = false;
      button.innerHTML = originalText;

    }, 2500);

  } catch(error){

    button.innerHTML = "Something went wrong";

    setTimeout(() => {

      button.disabled = false;
      button.innerHTML = originalText;

    }, 2500);

    console.log(error);

  }

});