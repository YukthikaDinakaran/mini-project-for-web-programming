document.addEventListener("DOMContentLoaded", function() {
    let searchBtn = document.querySelector('#search-btn');
    let searchBar = document.querySelector('.search-bar-container');
    let videoBtn = document.querySelectorAll('.vid-btn');
    let searchSubmitBtn = document.getElementById("search-submit-btn");
    function showLoginForm() {
        document.getElementById("loginForm").style.display = "block";
    }
    
    function closeLoginForm() {
        document.getElementById("loginForm").style.display = "none";
    }
    
    function showSignupForm() {
        document.getElementById("signupForm").style.display = "block";
    }
    
    function closeSignupForm() {
        document.getElementById("signupForm").style.display = "none";
    }
    
    searchBtn.addEventListener('click', () => {
        searchBtn.classList.toggle('fa-times');
        searchBar.classList.toggle('active');
    });

    searchSubmitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        var placeName = document.getElementById('search-bar').value;
        if (placeName) {
            var googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(placeName);
            window.open(googleMapsUrl, '_blank');
        }
    });

    videoBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.controls .active').classList.remove('active');
            btn.classList.add('active');
            let src = btn.getAttribute('data-src');
            document.querySelector('#video-slider').src = src;
        });
    });
});
document.getElementById('login-btn').addEventListener('click', function() {
    window.location.href = 'form.html';
});
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var place = document.getElementById('placeInput').value;
    var guests = document.getElementById('guestsInput').value;
    var arrival = document.getElementById('arrivalInput').value;
    var departure = document.getElementById('departureInput').value;
    if (!place || !guests || !arrival || !departure) {
        alert('Please fill in all the required fields.');
    } else {
        alert('Booking successful for ' + guests + ' guests at ' + place + ' from ' + arrival + ' to ' + departure);
        document.getElementById('bookingForm').reset();
    }
});


