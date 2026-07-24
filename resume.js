// Display data from Local Storage

document.getElementById("rname").textContent =
localStorage.getItem("name");

document.getElementById("remail").textContent =
localStorage.getItem("email");

document.getElementById("rphone").textContent =
localStorage.getItem("phone");

document.getElementById("raddress").textContent =
localStorage.getItem("address");

// LinkedIn
document.getElementById("rlinkedin").textContent =
localStorage.getItem("linkedin");

document.getElementById("rlinkedin").href =
localStorage.getItem("linkedin");

// GitHub
document.getElementById("rgithub").textContent =
localStorage.getItem("github");

document.getElementById("rgithub").href =
localStorage.getItem("github");

// Resume Details
document.getElementById("robjective").textContent =
localStorage.getItem("objective");

document.getElementById("reducation").textContent =
localStorage.getItem("education");

document.getElementById("rskills").textContent =
localStorage.getItem("skills");

document.getElementById("rprojects").textContent =
localStorage.getItem("projects");

document.getElementById("rcertificates").textContent =
localStorage.getItem("certificates");

document.getElementById("rstrengths").textContent =
localStorage.getItem("strengths");

document.getElementById("rlanguages").textContent =
localStorage.getItem("languages");

document.getElementById("rhobbies").textContent =
localStorage.getItem("hobbies");


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