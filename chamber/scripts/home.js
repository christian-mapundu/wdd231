// JavaScript
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))



// Events Section using fetch to get data about Timbuktu events
document.addEventListener("DOMContentLoaded", async function () {
    const eventsContainer = document.querySelector(".current-events .event");

    try {
        const response = await fetch("data/events.json");
        const events = await response.json();

        eventsContainer.innerHTML = events
            .map(event => `
                <div class="event-card">
                    <img src="${event.image}" alt="${event.title}">
                    <h3>${event.title}</h3>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Objective:</strong> ${event.objective}</p>
                    <p><strong>Location:</strong> ${event.location || event.platform}</p>
                    <p><strong>Time:</strong> ${event.time}</p>
                </div>
            `)
            .join("");
    } catch (error) {
        console.error("Error fetching events:", error);
        eventsContainer.innerHTML = "<p>Failed to load events. Please try again later.</p>";
    }
});
