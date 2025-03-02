// Generate Portfolio Function
function generatePortfolio() {
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const skills = document.getElementById("skills").value;
    const projects = document.getElementById("projects").value;
    const profilePic = document.getElementById("profilePicPreview").src;

    document.getElementById("previewName").innerText = name || "John Doe";
    document.getElementById("previewTitle").innerText = title || "Web Developer";
    document.getElementById("previewSkills").innerText = skills || "HTML, CSS, JavaScript";
    document.getElementById("previewProjects").innerText = projects || "Portfolio Website, To-Do App";
    document.getElementById("previewProfilePic").src = profilePic;

    // Save to Local Storage
    localStorage.setItem("portfolioData", JSON.stringify({ name, title, skills, projects, profilePic }));
}

// Load saved data when page refreshes
window.onload = function() {
    const savedData = JSON.parse(localStorage.getItem("portfolioData"));
    if (savedData) {
        document.getElementById("name").value = savedData.name;
        document.getElementById("title").value = savedData.title;
        document.getElementById("skills").value = savedData.skills;
        document.getElementById("projects").value = savedData.projects;
        document.getElementById("profilePicPreview").src = savedData.profilePic || "";
        document.getElementById("previewProfilePic").src = savedData.profilePic || "";
        generatePortfolio();
    }
};

// Handle Profile Picture Upload
document.getElementById("profilePicInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const imageUrl = reader.result;
            document.getElementById("profilePicPreview").src = imageUrl;
            document.getElementById("previewProfilePic").src = imageUrl;
        };
        reader.readAsDataURL(file);
    }
});

// Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.innerText = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
