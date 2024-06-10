function validateEmailMatch() {
  const email1 = document.getElementById("email1").value;
  const email2 = document.getElementById("email2").value;

  if (email1 !== email2) {
    document.getElementById("error-message").innerText =
      "Email addresses do not match.";
    return false;
  }

  document.getElementById("error-message").innerText = "";
  return true;
}
