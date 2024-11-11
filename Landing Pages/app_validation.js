
      document.getElementById("appLinkForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const emailInput = document.getElementById("email-input").value;

    // Simple validation to ensure email or phone number is entered
    if (emailInput) {
      alert("An email has been sent to " + emailInput + ".");
    }
    else {
      alert("Please enter a valid email or phone number.");
    }
  });

  // for chnaging placeholder

  const emailOption = document.getElementById("email");
  const phoneOption = document.getElementById("phone");
  const inputField = document.getElementById("email-input");

  emailOption.addEventListener("change", function() {
    if (emailOption.checked) {
      inputField.placeholder = "Email";
    }
  });

  phoneOption.addEventListener("change", function() {
    if (phoneOption.checked) {
      inputField.placeholder = "Phone";
    }
  });