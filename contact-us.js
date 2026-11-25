const form = document.getElementById("contactus");

form.addEventListener("submit", function (event) {
  event.preventDefault();

    const fname = document.getElementById("fname").value.trim();
    const number = document.getElementById("number").value.trim();
    const writereview = document.getElementById("write").value.trim();


    document.getElementById("fnameError").textContent = "";
    document.getElementById("numberError").textContent = "";
    document.getElementById("writereviewError").textContent = "";

     let isValid = true;

    if (fname === "") {
        document.getElementById("fnameError").textContent = "Full Name is required.";
        isValid = false;
  }

  
    if (number === "") {
        document.getElementById("numberError").textContent = "Contact Number is required.";
        isValid = false;
  } else if (!/^\d{11,}$/.test(number)) {
        document.getElementById("numberError").textContent = "Must be at least 11 digits (numbers only).";
        isValid = false;
  }

  // 3. Check Feedback
    if (writereview === "") {
        document.getElementById("writereviewError").textContent = "Please write a review.";
        isValid = false;
  } 

  // Submit if all checks pass
    if (isValid) {
     alert("Form is valid! Submitting data...");
    form.submit();
  }
});