let storedPar = null;

try {
    let savedInfo = sessionStorage.getItem('par');
    if (savedInfo) {
        storedPar = JSON.parse(savedInfo);
    }
} catch (error) {
    storedPar = null;
    sessionStorage.removeItem('par');
}
if (!storedPar) {
    window.location.href = "index.html";
}

let nameElement = document.getElementById('name');
let lineNameElement = document.getElementById('line-name');
let avatarElement = document.getElementById('avatar');
let gitUserNameElement = document.getElementById('github-username');
let emailElement = document.getElementById('ticket-email');

if (storedPar) {
    if (nameElement) {
        nameElement.innerHTML = storedPar.fullName;
    }

    if (lineNameElement) {
        lineNameElement.innerHTML = storedPar.fullName;
    }

    if (gitUserNameElement) {
        gitUserNameElement.innerHTML = storedPar.gitUserName;
    }

    if (avatarElement && storedPar.avatarURL) {
        avatarElement.src = storedPar.avatarURL;
    }

    if (emailElement) {
        emailElement.innerHTML = storedPar.email;
    }
}