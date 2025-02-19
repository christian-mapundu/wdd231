document.querySelector('.hamburger').addEventListener('click', () => {
    const navMenu = document.querySelector('.navMenu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// JavaScript to populate the goals section
document.addEventListener("DOMContentLoaded", function () {
    const goals = [
        "Facilitate mentorship connections for students and professionals.",
        "Provide accessible online and local learning opportunities.",
        "Encourage industry networking and idea-sharing.",
        "Offer structured tutoring for skill development.",
        "Support career guidance and professional growth.",
        "Create a thriving community for knowledge exchange.",
        "Establish partnerships with organizations for talent sourcing."
    ];

    const goalsContainer = document.getElementById("goals-section");
    
    goals.forEach(goal => {
        let goalItem = document.createElement("div");
        goalItem.classList.add("goal-item");
        goalItem.textContent = goal;
        goalsContainer.appendChild(goalItem);
    });
});





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