document.addEventListener('DOMContentLoaded', (event) => {
    // Find all read more buttons
    const readMoreButtons = document.querySelectorAll('button[data-category]');
  
    // Add click event listeners to each button
    readMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        // Redirect to the appropriate page based on the data-category attribute
        window.location.href = `${category}.html`;
      });
    });
  });
  