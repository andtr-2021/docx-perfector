
// Go to Profile page
const editProfileBtn = document.querySelector('.edit-profile button');

editProfileBtn.addEventListener('click', () => {
    window.location.href = 'profile.html';
});

// Go to Billing Plan page
const billingBtn = document.querySelector('.functions .billingBtn');

billingBtn.addEventListener('click', () => {
    window.location.href = 'billing-plan.html';
});

// Loging out and go to the Landing page
const logoutBtn = document.querySelector('.functions .logoutBtn');

logoutBtn.addEventListener('click', () => {
    window.location.href = 'landing-page.html';
});

