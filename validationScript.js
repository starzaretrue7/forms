    // JavaScript code for form validation
	// Prevent form from submitting

let form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
  let inputField = document.getElementById('inputField');
  
  // Retrieve the input field value
  let inputValue = inputField.value;
  if (inputField.value == '') {
    alert('Alphanumeric Input is required!');
    event.preventDefault();
  }

  // Regular expression pattern for alphanumeric input
  else {
    let inputRegex = /^[a-zA-Z0-9_]+$/;
  
    // Check if the input value matches the pattern
    if (!inputRegex.test(inputValue)) {
  
      // Invalid input: display error message
      alert("Invalid input!");
      event.preventDefault();
    }
    // Valid input: display confirmation and submit the form
    else {
      alert("Thank you for your input");
      }
    }

  })
