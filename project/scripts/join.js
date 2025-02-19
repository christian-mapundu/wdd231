document.querySelector('.hamburger').addEventListener('click', () => {
    const navMenu = document.querySelector('.navMenu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Modals section
function openModal(id) {
    document.getElementById(id).style.display = "block";
}
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}


function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDateTime = now.toLocaleString('en-US', options);
    document.getElementById("lastModified").innerHTML = formattedDateTime; 
  }

  // Initial update
  updateDateTime();

  // Update every second
  setInterval(updateDateTime); 