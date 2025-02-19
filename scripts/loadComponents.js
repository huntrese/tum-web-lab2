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
  });