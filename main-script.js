
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


document.querySelector('.submitButton').addEventListener('click', function() {
    // Show the processing message
    document.querySelector('.bot-response').style.display = 'flex';

    var processingText = document.getElementById('processing-text');
    var dotCount = 0;

    // Function to update the text
    function updateProcessingText() {
        var dots = '.'.repeat(dotCount);
        processingText.textContent = 'Processing the file' + dots;
        dotCount = (dotCount % 3) + 1; // Reset the count after 5 dots
    }

    // Start the interval
    var intervalId = setInterval(updateProcessingText, 1000);

});
