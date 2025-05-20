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


const teamName = document.querySelector('#teamName');
const teamlabel = document.querySelector('.team-label');

teamName.addEventListener('click', function () {
    teamlabel.style.margin = '0 0 300px 0'; // Top, Right, Bottom, Left margins
});

