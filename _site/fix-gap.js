// Script to fix the gap between navbar and content
document.addEventListener('DOMContentLoaded', function() {
  // Apply direct style fixes
  const style = document.createElement('style');
  style.innerHTML = `
    body { margin: 0 !important; padding: 0 !important; }
    .navbar { margin-bottom: 0 !important; padding-bottom: 0 !important; border-bottom: 0 !important; }
    #quarto-header { margin: 0 !important; padding: 0 !important; }
    .page-columns { margin-top: 0 !important; padding-top: 0 !important; }
    .banner-section { margin-top: 0 !important; padding-top: 0 !important; }
    .column-page { margin-top: 0 !important; padding-top: 0 !important; }
    #quarto-content { margin-top: 0 !important; padding-top: 0 !important; }
    main.content { margin-top: 0 !important; padding-top: 0 !important; }
    #title-block-header { margin-top: 0 !important; padding-top: 0 !important; }
    
    /* Force any element after navbar to have no gap */
    .navbar + * { margin-top: 0 !important; padding-top: 0 !important; }
    
    /* Target all possible containers */
    .quarto-title-banner { margin-top: 0 !important; padding-top: 0 !important; }
    .quarto-title-block { margin-top: 0 !important; padding-top: 0 !important; }
  `;
  document.head.appendChild(style);
  
  // Direct DOM manipulation to remove any gap
  setTimeout(function() {
    // Find elements that might have space
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('#quarto-content');
    const banner = document.querySelector('.banner-section');
    const main = document.querySelector('main.content');
    
    // If elements exist, ensure they have no gap
    if (navbar && (content || banner || main)) {
      // Force elements to connect
      if (content) content.style.marginTop = '0';
      if (banner) banner.style.marginTop = '0';
      if (main) main.style.marginTop = '0';
      
      // Remove any computed margins that might be causing the gap
      const allElements = document.querySelectorAll('body > *');
      allElements.forEach(el => {
        if (el !== navbar) {
          el.style.marginTop = '0';
          el.style.paddingTop = '0';
        }
      });
    }
  }, 100); // Small delay to ensure DOM is fully loaded
});
