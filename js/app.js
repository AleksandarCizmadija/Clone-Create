document.addEventListener('DOMContentLoaded', function () {
    new Typed('.typed', {
        strings: ["Web Apps", "WordPress", "Mobile Apps"],
        // stringsElement: null,
        typeSpeed: 120,
        startDelay: 1200,
        backSpeed: 80,
        backDelay: 1500,
        // shuffle: true,
        loop: true,
        // loopCount: 5,
        showCursor: true,
        cursorChar: "|",
        attr: null,
        contentType: 'html',
    })
});

$('[data-fancybox]').fancybox({
    caption: function (instance, item) {
        return $(this).find('.fig').html();
    }
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        }
    }
});

const menuBar = document.querySelector('.menu-bar'),
    navLinks = document.querySelector('#nav-links'),
    navLinksAll = document.querySelectorAll('#nav-links li a'),
    mainNav = document.querySelector('#main-nav'),
    home = document.querySelector('#home'),
    work = document.querySelector('#work'),
    services = document.querySelector('#services'),
    about = document.querySelector('#about'),
    contact = document.querySelector('#contact')
footer = document.querySelector('#footer');

menuBar.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    if (navLinks.className === 'open') {
        setTimeout(() => {
            menuBar.innerHTML = '<i class="fas fa-times fa-2x"></i>';
        }, 500);
    } else {
        menuBar.innerHTML = '<i class="fas fa-bars fa-2x"></i>';
    }
})
window.addEventListener('scroll', function (e) {
    if (window.scrollY >= 45) {
        mainNav.style.top = 0;
    } else {
        mainNav.style.top = 'auto';
    }
    let homePosition = home.offsetTop,
        workPosition = work.offsetTop,
        aboutPosition = about.offsetTop,
        servicesPosition = services.offsetTop,
        contactPosition = contact.offsetTop,
        footerPosition = footer.offsetTop;

    navLinksAll.forEach(function (a) {
        a.classList.remove('active');
    })
    if (window.scrollY <= (workPosition - 50)) {
        navLinksAll.forEach(function (a) {
            if (a.innerHTML === 'Home') {
                a.classList.add('active');
            }
        })
    } else if (window.scrollY > (workPosition - 50) && window.scrollY < (servicesPosition - 72)) {
        navLinksAll.forEach(function (a) {
            if (a.innerHTML === 'Work') {
                a.classList.add('active');
            }
        })
    } else if (window.scrollY > (servicesPosition - 72) && window.scrollY < aboutPosition) {
        navLinksAll.forEach(function (a) {
            if (a.innerHTML === 'Services') {
                a.classList.add('active');
            }
        })
    } else if (window.scrollY > (aboutPosition - 50) && window.scrollY < contactPosition) {
        navLinksAll.forEach(function (a) {
            if (a.innerHTML === 'About') {
                a.classList.add('active');
            }
        })
    } else if (window.scrollY > (contactPosition - 50) && window.scrollY < footerPosition) {
        navLinksAll.forEach(function (a) {
            if (a.innerHTML === 'Contact') {
                a.classList.add('active');
            }
        })
    }

})

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });