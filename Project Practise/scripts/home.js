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
