// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Fungsi untuk toggle konten (efek panah 'v' pada kartu bento)
  const toggles = document.querySelectorAll('h3 span.text-gray-400');
  
  toggles.forEach(toggle => {
    toggle.style.cursor = 'pointer';
    
    // Memberikan event click pada panah 'v'
    toggle.addEventListener('click', function(e) {
      e.stopPropagation(); 
      const cardContent = this.parentElement.nextElementSibling;
      
      if (cardContent) {
        if (cardContent.style.display === 'none') {
          cardContent.style.display = 'block';
          this.textContent = 'v';
          this.style.transform = 'rotate(0deg)';
        } else {
          cardContent.style.display = 'none';
          this.textContent = '^';
        }
      }
    });
  });

  // Notifikasi ketika mengunduh CV
  const downloadLink = document.querySelector('a[download]');
  if(downloadLink) {
    downloadLink.addEventListener('click', () => {
      console.log("Resume diunduh oleh pengunjung.");
    });
  }
});