// ===============================
// PART 1: Event Handling
// ===============================
document.getElementById("messageBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = "You clicked the button!";
});

// ===============================
// PART 2: Interactive Features
// ===============================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
document.getElementById("increase").addEventListener("click", () => {
  count++;
  document.getElementById("counter").textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  document.getElementById("counter").textContent = count;
});

// Collapsible FAQ
const faqQuestion = document.querySelector(".faq-question");
faqQuestion.addEventListener("click", () => {
  const answer = document.querySelector(".faq-answer");
  answer.classList.toggle("hidden");
});

// ===============================
// PART 3: Form Validation
// ===============================
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent actual form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Name validation
  if (name.length < 3) {
    feedback.textContent = "❌ Name must be at least 3 characters.";
    feedback.style.color = "red";
    return;
  }

  // Email validation (regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    feedback.textContent = "Enter a valid email.";
    feedback.style.color = "red";
    return;
  }

  // Password validation
  if (password.length < 6) {
    feedback.textContent = "Password must be at least 6 characters.";
    feedback.style.color = "red";
    return;
  }

  // Success message
  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";

  // Clear form
  form.reset();
});
