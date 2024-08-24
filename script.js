// function showImage(certificate) {
//     const imageDiv = document.getElementById('certificate-image');
    
//     if (certificate === 'fullstack') {
//         // Check if the image is currently displayed
//         if (imageDiv.style.display === 'block') {
//             // If displayed, hide it
//             imageDiv.style.display = 'none';
//         } else {
//             // If hidden, show it
//             imageDiv.style.display = 'block';
//         }
//     }
// }

// function toggleDetails(id) {
//     const details = document.getElementById(id);
//     if (details.style.display === 'block') {
//         details.style.display = 'none';
//     } else {
//         details.style.display = 'block';
//     }
// }

// function showImage(certificate) {
//     var imageDiv = document.getElementById('certificate-image');
//     if (certificate === 'fullstack') {
//         imageDiv.style.display = 'block';
//     }
// }
function toggleCertificate() {
    var imageDiv = document.getElementById('certificate-image');
    if (imageDiv.style.display === 'none' || imageDiv.style.display === '') {
        imageDiv.style.display = 'block';
    } else {
        imageDiv.style.display = 'none';
    }
}
ScrollReveal().reveal('.card', {
    delay: 200,  // delay in milliseconds
    distance: '50px',  // distance for animation
    duration: 1000,  // animation duration
    easing: 'ease-in-out'  // easing function
});


  





document.addEventListener('DOMContentLoaded', function () {
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('rotate-on-scroll');
                observer.unobserve(entry.target); // Stop observing the element after animation
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    // Observe all elements with the class 'rotate-on-scroll'
    document.querySelectorAll('.rotate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Create another Intersection Observer for move-in effect
    const moveObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('move-on-scroll');
                moveObserver.unobserve(entry.target); // Stop observing the element after animation
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    // Observe all elements with the class 'move-on-scroll'
    document.querySelectorAll('.move-on-scroll').forEach(element => {
        moveObserver.observe(element);
    });
});
