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


// The button javascript code section
function navigate() {
    window.location.href = "join.html"; // Navigates to join.html within the same folder
}


// events Sections
const events = [
    {
        title: "Tech Innovation in Timbuktu",
        image: "images/Tech-Innovations.webp",
        description: "A local startup launched an innovative solar-powered internet hub, bringing connectivity to remote areas and fostering digital education."
    },
    {
        title: "Historic Manuscripts Digitized",
        image: "images/historic.webp",
        description: "A major project successfully digitized over 10,000 ancient Timbuktu manuscripts, preserving them for future generations and global research."
    },
    {
        title: "Cultural Festival Revival",
        image: "images/festival.webp",
        description: "The famous Festival in the Desert made a return, attracting artists and visitors from around the world to celebrate Mali’s rich cultural heritage."
    }
];

const eventIds = ["first", "second", "third"];

events.forEach((event, index) => {
    const eventDiv = document.getElementById(eventIds[index]);

    // Create elements
    const title = document.createElement("h3");
    title.innerText = event.title;

    const img = document.createElement("img");
    img.src = event.image;
    img.alt = event.title;
    img.loading = "lazy"; // Set lazy loading

    const desc = document.createElement("p");
    desc.innerText = event.description;

    // Append elements
    eventDiv.appendChild(title);
    eventDiv.appendChild(img);
    eventDiv.appendChild(desc);
});