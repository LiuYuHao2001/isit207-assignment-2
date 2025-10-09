let loggedIn = false;

// Login-Logout Handler
function loginHandler() {
    if (loggedIn == false) {
        loggedIn = true;
        document.getElementById("loginButton").textContent = "Login";
        console.log("User has logged in.")
    }
    else {
        loggedIn = false;
        document.getElementById("loginButton").textContent = "Logout";
        console.log("User has logged out.")
    }
}

// Tab Handler
const tabList = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabList.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')

        tabList.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})