let par = {
    avatarURL: "",
    fullName: "",
    email: "",
    gitUserName: "",

    validEmail: function() {
        let infoIcon = '<img src="/assets/icon-info.svg" alt="info">';
        let emailWarning = document.getElementById('invalid-email');
        let re = /\S+@\S+\.\S+/;;

        if (!re.test(this.email)) {
            emailWarning.style.color = 'hsl(7, 71%, 60%)'; 
            emailWarning.innerHTML = infoIcon + 'Please enter a valid email address';
            emailWarning.style.display = "revert";
            this.email = "";
            return false;
        }else{
            emailWarning.style.display = "none";
            return true;
        }
    }, 

    validUsername: function() {
        let infoIcon = '<img src="/assets/icon-info.svg" alt="info">';
        let gitWarning = document.getElementById('invalid-github');

        if (!this.gitUserName.startsWith('@')) {
            gitWarning.style.color = 'hsl(7, 71%, 60%)';
            gitWarning.innerHTML = infoIcon + 'GitHub username must start with @';
            gitWarning.style.display = "revert";
            return false;
        } else {
            gitWarning.style.display = "none";
            return true;
        }
    }
};

function acceptFile(input){
    if (!input.files || input.files.length === 0) {
        return; 
    }
    
    let file = input.files[0];
    let img = input.files[0].size;
    let imgsize = img/1024; 
    let warning = document.getElementById('upload-instruction');
    let submitButton = document.getElementById('submit-button');

    if (imgsize > 500) {
        let infoIcon = '<img src="/assets/icon-info.svg" alt="">';
        if (warning) {
            input.value = "";
            par.avatarURL = "";
            warning.style.color = 'hsl(7, 71%, 60%)'; 
            warning.innerHTML = infoIcon + ' File too large. Please upload a photo under 500KB';
            if (submitButton) submitButton.disabled = true; 
        }
        return;
    } else {
        if (warning) {
            warning.style.color = '';
        }
    }

    let reader = new FileReader();
    reader.onload = function() {
        par.avatarURL = reader.result;

        let preview = document.getElementById('preview');
        if (preview) {
            document.getElementById('upload-buttons').style.display = "revert";
            document.getElementById('test').style.display = "none";

            preview.style.padding = '0px'
            preview.style.maxBlockSize = '50px';
            preview.style.inlineSize = 'auto';
            preview.style.borderColor = 'hsl(245, 15%, 58%)';
            preview.src = reader.result;
        }
        if (submitButton) submitButton.disabled = false;
    };
    reader.readAsDataURL(file);
}

function removeImage(event) {
    event.preventDefault();

    par.avatarURL = "";

    const file = document.getElementById('file-upload');
    const preview = document.getElementById('preview');
    const uploadButtons = document.getElementById('upload-buttons');
    const uploadText = document.getElementById('test');
    const warning = document.getElementById('upload-instruction');

    if (file) file.value = "";
    if (preview) {
        preview.src = "/assets/icon-upload.svg";
        preview.style.padding = '';
        preview.style.maxBlockSize = '';
        preview.style.inlineSize = '';
        preview.style.borderColor = '';
    }
    if (uploadButtons) uploadButtons.style.display = "none";
    if (uploadText) uploadText.style.display = "";
    if (warning) {
        warning.style.color = '';
        warning.innerHTML = '<img src="/assets/icon-info.svg">Upload your photo (JPG or PNG, max size: 500KB).';
    }
}

function changeImage(event) {
    event.preventDefault();

    const input = document.getElementById('file-upload');
    if (input) input.click();
}

function submit(event) {
    event.preventDefault(); 

    par.fullName = document.querySelector('.full-name').value.trim();
    par.email = document.querySelector('.email-address').value.trim();
    par.gitUserName = document.querySelector('.github-username').value.trim();

    let validCheck = par.validEmail() || par.validUsername();
    let emptyCheck = par.avatarURL === "" || par.fullName === "" || par.email === "" || par.gitUserName === "";

    if (emptyCheck || !validCheck) {
        return;
    }

    sessionStorage.setItem('par', JSON.stringify(par));
    window.location.href = "ticket.html";
}
document.querySelector('form').addEventListener('submit', submit);