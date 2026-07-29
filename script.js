function generateResume() {

    // Personal Details
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Validation
    if (name === "" || email === "" || phone === "") {
        alert("Please fill in Name, Email, and Phone Number.");
        return;
    }

    // Save Personal Details
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

    // Social Links
    localStorage.setItem("linkedin", document.getElementById("linkedin").value.trim());
    localStorage.setItem("github", document.getElementById("github").value.trim());

    // Resume Details
    localStorage.setItem("objective", document.getElementById("objective").value.trim());
    localStorage.setItem("education", document.getElementById("education").value.trim());
    localStorage.setItem("skills", document.getElementById("skills").value.trim());
    localStorage.setItem("projects", document.getElementById("projects").value.trim());
    localStorage.setItem("certificates", document.getElementById("certificates").value.trim());
    localStorage.setItem("strengths", document.getElementById("strengths").value.trim());
    localStorage.setItem("languages", document.getElementById("languages").value.trim());
    localStorage.setItem("hobbies", document.getElementById("hobbies").value.trim());

    // Open Resume Preview Page
    window.location.href = "resume.html";
}