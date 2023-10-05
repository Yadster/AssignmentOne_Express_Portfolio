// public/js/about.js
document.addEventListener('DOMContentLoaded', function () {
  // Find the form element
  const form = document.querySelector('form');

  // Add a submit event listener to the form
  form.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();

      // Redirect to the homepage (modify the URL as needed)
      window.location.href = '/';
  });
});