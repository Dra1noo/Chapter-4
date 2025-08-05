// Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark");
    this.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Project Filtering
document.querySelectorAll(".filters button").forEach(btn => {
    btn.addEventListener("click", function () {
        let filter = this.getAttribute("data-filter");
        document.querySelectorAll(".project-card").forEach(card => {
            if (filter === "all" || card.getAttribute("data-category") === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
