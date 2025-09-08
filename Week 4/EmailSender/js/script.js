function sendEmails() {
  const emailInput = document.getElementById("emailInput").value;
  const emailListDiv = document.getElementById("emailList");

  // Clear the email list div before adding new entries
  emailListDiv.innerHTML = "";

  // Split the input string into an array of emails, trimming whitespace
  const emailList = emailInput.split(",").map((email) => email.trim());
  console.log(emailList);

  // Using for loop to iterate over the email list
  for (let i = 0; i < emailList.length; i++) {
    const emailItem = document.createElement("p");
    emailItem.className = "email-item";
    emailItem.textContent = `Sending  email to: ${emailList[i]}`;
    emailListDiv.appendChild(emailItem);
  }

  // After the loop finishes
  const successMessage = document.createElement("p");
  successMessage.className = "email-item";
  successMessage.style.color = "green";
  successMessage.textContent = "All  emails have been sent successfully!";
  emailListDiv.appendChild(successMessage);
}
