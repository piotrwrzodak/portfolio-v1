// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let show = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!show) {
    showMenu();
  } else {
    hideMenu();
  }
}

function showMenu() {
  menuBtn.classList.add('close');
  menu.classList.add('show');
  menuNav.classList.add('show');
  navItems.forEach((item) => item.classList.add('show'));
  disableScrolling();
  // Set Menu State
  show = true;
}

function hideMenu() {
  menuBtn.classList.remove('close');
  menu.classList.remove('show');
  menuNav.classList.remove('show');
  navItems.forEach((item) => item.classList.remove('show'));
  enableScrolling();
  // Set Menu State
  show = false;
}

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  // Hide Navbar on Scroll Down
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector('.top').style.top = '0';
    } else {
      document.querySelector('.top').style.top = '-8rem';
    }
    prevScrollpos = currentScrollPos;
  };
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.top').style.top = '0';
  } else {
    document.querySelector('.top').style.top = '-8rem';
  }
  prevScrollpos = currentScrollPos;
};

// Scroll to id
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var link_down = document.querySelector('#link0');
link_down.addEventListener('click', function () {
  smoothScroll('#about', 2500);
});
var link_home = document.querySelector('#link1');
link_home.addEventListener('click', function () {
  smoothScroll('#home', 2500);
});
var link_about = document.querySelector('#link2');
link_about.addEventListener('click', function () {
  hideMenu();
  enableScrolling();
  smoothScroll('#about', 2500);
});
var link_skills = document.querySelector('#link3');
link_skills.addEventListener('click', function () {
  hideMenu();
  enableScrolling();
  smoothScroll('#skills', 2500);
});
var link_work = document.querySelector('#link4');
link_work.addEventListener('click', function () {
  hideMenu();
  enableScrolling();
  smoothScroll('#work', 2500);
});
var link_contact = document.querySelector('#link5');
link_contact.addEventListener('click', function () {
  hideMenu();
  enableScrolling();
  smoothScroll('#contact', 2500);
});

// change active section
const changeNav = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
      document.querySelector('.active').classList.remove('active');

      var id = entry.target.getAttribute('id');
      var newLink = document
        .querySelector(`[href="#${id}"]`)
        .classList.add('active');
    }
  });
};

const options = {
  threshold: 0.55,
};

const observer = new IntersectionObserver(changeNav, options);

const sections = document.querySelectorAll('section.section');
sections.forEach((section) => {
  observer.observe(section);
});

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.scroll-show', {
  move: 0,
  duration: 1200,
  delay: 400,
});
