// Function to handle formsubmission
function handleSubscribe(event) {
  event.preventDefault();
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value.trim();

  // Check if the email is valid
  if (validateEmail(email)) {
    // Perform form submission, for example, you can send the email to a server
    alert(`Subscribed successfully with email: ${email}`);
    // Clear the input field after successful submission
    emailInput.value = "";
  } else {
    alert("Please enter a valid email address");
  }
}

// Function to validate email format
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Attach the handleSubscribe function to the form submission event
const form = document.querySelector("form");
form.addEventListener("submit", handleSubscribe);

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check if the fields are not empty
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
    return;
  }

  // Perform form submission, for example, you can send the form data to a server
  alert(
    `Submitted successfully with name: ${name}, email: ${email}, and message: ${message}`
  );

  // Clear the input fields after successful submission
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

// Attach the handleSubmit function to the form submission event
const form2 = document.querySelector("form");
form2.addEventListener("submit", handleSubmit);
