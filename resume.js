// Display Personal Details
document.getElementById("rname").textContent =
    localStorage.getItem("name") || "";

document.getElementById("remail").textContent =
    localStorage.getItem("email") || "";

document.getElementById("rphone").textContent =
    localStorage.getItem("phone") || "";

// LinkedIn
const linkedin = localStorage.getItem("linkedin") || "";
document.getElementById("rlinkedin").textContent = linkedin;
document.getElementById("rlinkedin").href = linkedin;

// GitHub
const github = localStorage.getItem("github") || "";
document.getElementById("rgithub").textContent = github;
document.getElementById("rgithub").href = github;

// Resume Details
document.getElementById("robjective").textContent =
    localStorage.getItem("objective") || "";

document.getElementById("reducation").textContent =
    localStorage.getItem("education") || "";

// Function to display list items
function displayList(id, data) {
    const list = document.getElementById(id);
    list.innerHTML = "";

    if (data) {
        data.split("\n").forEach(item => {
            if (item.trim() !== "") {
                const li = document.createElement("li");
                li.textContent = item.replace(/^•\s*/, "");
                list.appendChild(li);
            }
        });
    }
}

// Display Lists
displayList("rskills", localStorage.getItem("skills"));
displayList("rprojects", localStorage.getItem("projects"));
displayList("rcertificates", localStorage.getItem("certificates"));
displayList("rstrengths", localStorage.getItem("strengths"));
displayList("rlanguages", localStorage.getItem("languages"));
displayList("rhobbies", localStorage.getItem("hobbies"));

// Download Resume as PDF
function downloadPDF() {

    const element = document.getElementById("resume");

    const options = {
        margin: 0.5,
        filename: "My_Resume.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "portrait"
        }
    };

    html2pdf().set(options).from(element).save();
}

// Go back to edit
function goBack() {
    window.location.href = "index.html";
}