document.querySelector('.hamburger').addEventListener('click', () => {
    const navMenu = document.querySelector('.navMenu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

function showMessage() {
    alert("Welcome to Connect Learning Hub! Choose a membership level and start your journey.");
}

async function loadTestimonials() {
    try {
        const response = await fetch('data/membership-testimonials.json'); // Load the JSON file
        const data = await response.json();
        const container = document.getElementById('testimonials');

        data.forEach(testimonial => {
            const card = document.createElement('div');
            card.classList.add('testimonial-card');
            card.innerHTML = `
                <h4>${testimonial.name} (${testimonial.country})</h4>
                <small>${testimonial.career}</small>
                <p>"${testimonial.testimonial}"</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}

window.onload = loadTestimonials;




// footer section
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