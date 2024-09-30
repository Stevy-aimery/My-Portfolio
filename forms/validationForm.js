var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();

  let thisForm = this;
  thisForm.querySelector(".loading").classList.add("d-block");
  thisForm.querySelector(".sent-message").classList.remove("d-block");

  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      thisForm.querySelector(".loading").classList.remove("d-block");
      if (response.ok) {
        thisForm.querySelector(".sent-message").innerHTML = "Your message has been sent. Thank you!";
        thisForm.querySelector(".sent-message").classList.add("d-block");
        form.reset();
        
        // Hide the success message after 20 seconds
        setTimeout(() => {
          thisForm.querySelector(".sent-message").classList.remove("d-block");
        }, 6000); // 20 seconds in milliseconds

      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
}

form.addEventListener("submit", handleSubmit);

function displayError(thisForm, error) {
  thisForm.querySelector(".loading").classList.remove("d-block");
  thisForm.querySelector(".error-message").innerHTML = "Invalid input. Please correct the fields and try again.";
//   thisForm.querySelector(".error-message").innerHTML = "Please fill in the fields correctly!"+error;
  thisForm.querySelector(".error-message").classList.add("d-block");
  setTimeout(() => {
    thisForm.querySelector(".error-message").classList.remove("d-block");
  }, 8000);
  form.reset();
}
