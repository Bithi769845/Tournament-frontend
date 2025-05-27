document.addEventListener("DOMContentLoaded", function () {
    // Handle nav-link active state
    const navLinks = document.querySelectorAll('.nav-link');

    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('activs');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            removeActiveClass();
            link.classList.add('activs');
        });
    });

    if (navLinks.length > 0) {
        navLinks[0].classList.add('activs');
    }

    // Toggle between registration and player form
    const registrationBtn = document.querySelector('#registrationID');
    const registrationForm = document.querySelector('.registration-form');
    const playerBtn = document.querySelector('#playerId');
    const playerForm = document.querySelector('.player-form');

    if (registrationBtn && playerBtn && registrationForm && playerForm) {
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
    }

    // Form label styling on input focus
    const inputFields = document.querySelectorAll('.forminput');
    const labels = document.querySelectorAll('.teamlabel');

    inputFields.forEach((inputField, index) => {
        inputField.addEventListener('click', function () {
            if (labels[index]) {
                labels[index].style.margin = '-13px 0 0 20px';
                // Uncomment if you want to style the label border
                // labels[index].style.border = '1px solid green';
                // labels[index].style.borderRadius = '5px';
            }
        });
    });

    // Gallery image rotation and zoom
    let rotation = 0, zoomLevel = 1;

    window.rotateImage = function (degrees) {
        rotation += degrees;
        updateTransform();
    }

    window.zoomImage = function (amount) {
        zoomLevel = Math.max(1, zoomLevel + amount);
        updateTransform();
    }

    function updateTransform() {
        const carouselItems = document.querySelectorAll('.carousel-item img');
        carouselItems.forEach(item => {
            item.style.transform = `rotate(${rotation}deg) scale(${zoomLevel})`;
        });
    }
});
