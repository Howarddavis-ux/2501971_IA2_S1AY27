// ===========================================================================
// 🏛️ SCIT Web Programming - AI DISCLOSURE BLOCK
// ===========================================================================

// File Name:      [ticket.js]

// Student Name:   [Howard Davis]

// Student ID:     [2501971]

// Assignment:     [IA 2]

// Date:           [31/10/2026]
// -----------------------------------------------------------------------------

// 🤖 GENERIC AI TOOL UTILISED (Check all that apply):

// [ ] GitHub Copilot     [ ] ChatGPT     [ ] Claude     [ ] Gemini     [X] None

// -----------------------------------------------------------------------------

// 📝 SCOPE OF WORK & DEBUGGING LOG:

// 1. Specific Bug/Error Encountered:

//    [Paste compiler error or describe the runtime logic bug you faced]

// 2. Exact Prompt Sent to AI Tool:

//    "[Paste the exact text prompt you fed to the AI engine here]"


// 3. Resolution/Fix Applied:

//    [Briefly explain what structural syntax or comment changes you made based

//     on the AI feedback. Do not paste massive code blocks here.]

// -----------------------------------------------------------------------------

// ⚠️ INTEGRITY VERIFICATION DECLARATION:

// By submitting this file, I certify that the core algorithmic logic, program

// architecture, and data structures implemented herein are entirely my own

// authentic work. AI assistance was restricted strictly to debugging and/or

// generating explanatory documentation comments in full compliance with the

// course syllabus.


// Student Electronic Signature: [H.D/Howard Davis]
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
    window.location.href = "../index.html";
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