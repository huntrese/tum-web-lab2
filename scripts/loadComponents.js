// Function to load a component
async function loadComponent(componentName, targetElementId) {
  try {
    const response = await fetch(`components/${componentName}.html`);
    if (!response.ok) {
      throw new Error(`Failed to load ${componentName}`);
    }
    const html = await response.text();
    document.getElementById(targetElementId).innerHTML = html;
    
  } catch (error) {
    console.error(error);
  }
}


// Load all components
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "header-placeholder");
  loadComponent("footer", "footer-placeholder");
  
  // Back to Top Button initialization
  const backToTopButton = document.getElementById("back-to-top");
  if (backToTopButton) {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });
    
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

function toggleMobileNav() {
  const mobileNav = document.getElementById('mobile-nav');
  const burgerIcon = document.querySelector('.burger-icon');
  
  mobileNav.classList.toggle('hidden');
  mobileNav.classList.toggle('open');
  burgerIcon.classList.toggle('open');
}