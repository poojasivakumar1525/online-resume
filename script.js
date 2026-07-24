function generateResume() {

    // Personal Details
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("phone", document.getElementById("phone").value);
    

    // Social Links
    localStorage.setItem("linkedin", document.getElementById("linkedin").value);
    localStorage.setItem("github", document.getElementById("github").value);

    // Resume Details
    localStorage.setItem("objective", document.getElementById("objective").value);
    localStorage.setItem("education", document.getElementById("education").value);
    localStorage.setItem("skills", document.getElementById("skills").value);
    localStorage.setItem("projects", document.getElementById("projects").value);
    localStorage.setItem("certificates", document.getElementById("certificates").value);
    localStorage.setItem("strengths", document.getElementById("strengths").value);
    localStorage.setItem("languages", document.getElementById("languages").value);
    localStorage.setItem("hobbies", document.getElementById("hobbies").value);

    // Open Resume Preview Page
    window.location.href = "resume.html";
}