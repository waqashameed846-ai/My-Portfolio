// === Smooth Scroll for Navigation ===
document.querySelectorAll('.nav-bar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// === Contact Form Validation ===
document.getElementById("submit").addEventListener("click", function () {
  let name = document.querySelector('input[placeholder="name"]').value.trim();
  let email = document.querySelector('input[placeholder="email"]').value.trim();
  let message = document.querySelector("#Message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert(" Please fill out all fields before submitting.");
  } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    alert(" Please enter a valid email address.");
  } else {
    alert(" Thank you " + name + "! Your message has been submitted.");
  }
});


