// get started
const studyAreas = ["Web Development", "Health", "Communication", "Business", "Digital Marketing", "TESL", "Soft Skills"];
const tutorsAndMentors = {
    "Health": [
        { name: "Alice Johnson", sex: "Female", role: "Tutor" },
        { name: "Bob Smith", sex: "Male", role: "Mentor" }
    ],
    "Web Development": [
        { name: "Charlie Brown", sex: "Male", role: "Tutor" },
        { name: "Dana White", sex: "Female", role: "Mentor" },
        {name: "Christian T. Mapundu", sex: "Male", role: "Mentor"}
    ],
    "Communication": [
        {name: "Nigel Magada", sex: "Male", role: "Tutor"},
        {name: "Sean Kundlande", sex: "Male", role: "Mentor"}
    ],
    "Business": [
        {name: "Jennifer Warden", sex: "Female", role: "Tutor"},
        {name: "Lindsay Brown", sex: "Female", role: "Mentor"}
    ],
    "Digital Marketing": [
        {name: "Collin Ebuke", sex: "Male", role: "Tutor"},
        {name: "Geraldine Answorth", sex: "Female", role: "Mentor"},
        {name: "Charlene Black", sex: "Female", role: "Mentor"}
    ],
    "TESL":[
        {name: "Esnart Matambo", sex: "Female", role:"Tutor and Instructor"},
        {name: "Rachel Guhu", sex: "Female", role: "Mentor"}
    ]
};

const studyAreasDiv = document.getElementById("study-areas");
const tutorsMentorsDiv = document.getElementById("tutors-mentors");
const listDiv = document.getElementById("list");

studyAreas.forEach(area => {
    let button = document.createElement("button");
    button.textContent = area;
    button.onclick = () => showTutorsAndMentors(area);
    studyAreasDiv.appendChild(button);
});

function showTutorsAndMentors(area) {
    listDiv.innerHTML = "";
    if (tutorsAndMentors[area]) {
        tutorsAndMentors[area].forEach(person => {
            let div = document.createElement("div");
            div.textContent = `${person.name} (${person.sex}) - ${person.role}`;
            let requestButton = document.createElement("button");
            requestButton.textContent = "Request";
            requestButton.onclick = () => alert(`Request sent to ${person.name}`);
            div.appendChild(requestButton);
            listDiv.appendChild(div);
        });
        tutorsMentorsDiv.classList.remove("hidden");
    }
}

// Testimonials
document.addEventListener("DOMContentLoaded", () => {
    fetch("data/testimonials.json")
        .then(response => response.json())
        .then(testimonials => {
            showRandomTestimonials(testimonials);
        })
        .catch(error => console.error("Error loading testimonials:", error));
});

function showRandomTestimonials(testimonials) {
    const testimonialsSection = document.getElementById("testimonial-list"); // No change needed
    testimonialsSection.innerHTML = "";

    let shuffled = testimonials.sort(() => 0.5 - Math.random()).slice(0, 3);
    shuffled.forEach(t => {
        let div = document.createElement("div");
        div.classList.add("testimonial");
        div.innerHTML = `<strong>${t.name} (${t.country})</strong><p>${t.text}</p>`;
        testimonialsSection.appendChild(div);
    });
}
