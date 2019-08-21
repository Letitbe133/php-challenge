const userName = document.getElementById("user-name");
const submitBtn = document.getElementById("submit-button");
const form = document.querySelector("form");

submitBtn.addEventListener("click", e => {
  e.preventDefault();
  if (usernamet.value != "") {
    form.setAttribute("action", "test.php");
    window.location.replace(
      `http://localhost:3000/test.php?test=${userInput.value}`
    );
  } else {
    console.log("User name cannot be empty");
  }
});
