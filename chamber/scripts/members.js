document.addEventListener("DOMContentLoaded", async () => {
    const cardsContainer = document.querySelector(".cards");
    const grid = document.getElementById("grid");
    const list = document.getElementById("list");

    try {
        // Fetch the JSON data
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Failed to load members data.");
        
        const members = await response.json();

        // Shuffle the members array to show a random order
        const shuffledMembers = members.sort(() => Math.random() - 0.5);

        // Loop through the data and create HTML elements
        shuffledMembers.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" class="member-img">
                <h2>${member.name}</h2>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p class="membership-level">Membership Level: ${getMembershipLevel(member.membership)}</p>
                <p class="description">${member.description}</p>
            `;

            cardsContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching members:", error);
    }
    grid.addEventListener("click", () => {
        cardsContainer.classList.remove("list-view");
    });

    // Toggle to List View
    list.addEventListener("click", () => {
        cardsContainer.classList.add("list-view");
    });
});

// Helper function to convert membership level to text
function getMembershipLevel(level) {
    switch (level) {
        case 1: return "Member";
        case 2: return "Silver";
        case 3: return "Gold";
        default: return "Unknown";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const gridBtn = document.getElementById("grid");
    const listBtn = document.getElementById("list");
    const cardsContainer = document.querySelector(".cards");

    gridBtn.addEventListener("click", () => {
        cardsContainer.classList.remove("list-view");
    });

    listBtn.addEventListener("click", () => {
        cardsContainer.classList.add("list-view");
    });
});
