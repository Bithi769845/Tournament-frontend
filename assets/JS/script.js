  // Select all nav-link elements
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to remove 'active' class from all menu items
    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('activs');
        });
    }

    // Loop through each nav-link and add event listeners
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            removeActiveClass();  // Remove 'active' from all links
            link.classList.add('activs');  // Add 'active' to clicked link
        });
    });

    // Set the first link as active by default
    navLinks[0].classList.add('activs');


// Select the registration button
const registrationBtn = document.querySelector('#registrationID');
const registrationForm = document.querySelector('.registration-form');
const playerBtn = document.querySelector('#playerId');
const playerForm = document.querySelector('.player-form');

// Add event listener to the button
playerBtn.addEventListener('click', function () {
    registrationForm.style.display = 'none';
    playerForm.style.display = 'block';
    playerBtn.classList.remove('btn-danger');
    registrationBtn.style.backgroundColor = 'red';
    registrationBtn.style.color = 'white';
    playerBtn.style.backgroundColor = 'green';
    playerBtn.style.color = 'white';
});

registrationBtn.addEventListener('click', function () {
    registrationForm.style.display = 'block';
    playerForm.style.display = 'none';
    registrationBtn.classList.remove('btn-success');
     playerBtn.style.backgroundColor = 'red';
    playerBtn.style.color = 'white';
    registrationBtn.style.backgroundColor = 'green';
    registrationBtn.style.color = 'white';
   
});


 const inputFields = document.querySelectorAll('.forminput');
    const labels = document.querySelectorAll('.teamlabel');

    inputFields.forEach((inputField, index) => {
        inputField.addEventListener('click', function () {
            // Apply the same design to all input fields when clicked
            labels[index].style.margin = '-13px 0 0 20px';  // Adjust the margin
            // Optional: Uncomment the following lines if you want to add border and border-radius as well
            // labels[index].style.border = '1px solid green';
            // labels[index].style.borderRadius = '5px';
        });
    });

