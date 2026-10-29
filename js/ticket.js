let storedPar = JSON.parse(sessionStorage.getItem('par'));

let nameElement = document.getElementById('name');
let avatarElement = document.getElementById('avatar');
let gitUserNameElement = document.getElementById('github-username');

if (storedPar) {
    if (nameElement) {
        nameElement.textContent = storedPar.fullName || '';
    }

    if (gitUserNameElement) {
        gitUserNameElement.textContent = storedPar.gitUserName || '';
    }

    if (avatarElement && storedPar.avatarURL) {
        avatarElement.src = storedPar.avatarURL;
    }
}