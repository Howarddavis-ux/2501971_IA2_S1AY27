let par = {
    avatarURL: "",
    fullName: "",
    email: "",
    gitUserName: "",

    validEmail: function() {
        let infoIcon = '<img src="/assets/icon-info.svg" alt="info">';
        let emailWarning = document.getElementById('invalid-email');
        let re = /\S+@\S+\.\S+/;
        
        if (!re.test(emailWarning)) {
            emailWarning.style.color = 'hsl(7, 71%, 60%)'; 
            emailWarning.innerHTML = infoIcon + 'Please enter a valid email address';
            showStuff('invalid-email')
        }else{
            if (emailWarning) {
                emailWarning.innerHTML = '';
            }
        }
    }
};

function acceptFile(input){
    if (!input.files || input.files.length === 0) {
        return; 
    }

    let file = input.files[0];
    let submitButton = document.getElementById('submit-button');
    if (submitButton) submitButton.disabled = true;

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
            preview.style.border = 'none';
            preview.src = reader.result;
        }
        if (submitButton) submitButton.disabled = false;
    };
    reader.onerror = function() {
        if (submitButton) submitButton.disabled = false;
    };
    reader.readAsDataURL(file);
}

function submit(event) {
    event.preventDefault(); 

    par.fullName = document.querySelector('.full-name').value.trim();
    par.email = document.querySelector('.email-address').value.trim();
    par.gitUserName = document.querySelector('.github-username').value.trim();

    par.validEmail();
    console.log(par.avatarURL);
    console.log(par.fullName);
    console.log(par.email);
    console.log(par.gitUserName);

    // if (par.avatarURL === "" || par.fullName === "" || par.email === "" || par.gitUserName === "") {
    //     alert("Please enter all required information.");
    //     return; // Stop execution here so it doesn't redirect
    // }

    sessionStorage.setItem('par', JSON.stringify(par));
    
    let infoIcon = '<img src="/assets/icon-info.svg" alt="">';
    let warning = document.getElementById('upload-instruction');
    
    if (warning) {
        warning.style.color = 'hsl(7, 71%, 60%)'; 
        warning.innerHTML = infoIcon + 'File too large. Please upload a photo under 500KB';
    }
    //window.location.href = "ticket.html";
}

document.querySelector('form').addEventListener('submit', submit);

function showStuff(id) {
    document.getElementById(id).style.visibility = "visible";
}
function hideStuff(id) {
    document.getElementById(id).style.visibility = "hidden";
}