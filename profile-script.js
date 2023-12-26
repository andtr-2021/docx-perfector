function displayImage(input) {
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const image = input.previousElementSibling.querySelector('img');
            image.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}


function editProfile() {
    // Hide the edit button
    document.querySelector('.editBtn').style.display = 'none';

    // Show the save and cancel buttons
    document.querySelector('.saveBtn').style.display = 'inline-block';
    document.querySelector('.cancelBtn').style.display = 'inline-block';

    // Make the dd fields editable
    document.getElementById('usernameField').contentEditable = true;
    document.getElementById('passwordField').contentEditable = true;
}

function saveProfile() {
    // Hide the save and cancel buttons
    document.querySelector('.saveBtn').style.display = 'none';
    document.querySelector('.cancelBtn').style.display = 'none';

    // Show the edit button
    document.querySelector('.editBtn').style.display = 'inline-block';

    // Make the dd fields non-editable
    document.getElementById('usernameField').contentEditable = false;
    document.getElementById('passwordField').contentEditable = false;
}

function cancelEdit() {
    // Hide the save and cancel buttons
    document.querySelector('.saveBtn').style.display = 'none';
    document.querySelector('.cancelBtn').style.display = 'none';

    // Show the edit button
    document.querySelector('.editBtn').style.display = 'inline-block';

    // Make the dd fields non-editable
    document.getElementById('usernameField').contentEditable = false;
    document.getElementById('passwordField').contentEditable = false;
}