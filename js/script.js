const hb = document.querySelector('.header_burger_btn');
const menu = document.querySelector('.header');

hb.addEventListener('click', function(){
    menu.classList.toggle('active');
})

//menu
document.addEventListener('DOMContentLoaded', function () {
    // Get links from your menu
    var mentorsLink = document.querySelector('a[href="#mentors"]');

    // Add a click handler for scrolling and centering above
    mentorsLink.addEventListener('click', function (e) {
        e.preventDefault();
        //Get a block of mentors by its id
        var mentorsBlock = document.getElementById('mentors');
        var windowHeight = window.innerHeight;
        mentorsBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, 700);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const burgerBtn = document.querySelector('.header_burger_btn');
    const menu = document.querySelector('.menu ul');

    burgerBtn.addEventListener('click', function () {
        menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
    });
});


function showFeatures() {
    alert("You are browsing the possibilities!");
}

function downloadNow() {
    alert("Download has started!");
}






