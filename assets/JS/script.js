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