console.log('Hello World!');

// const myName = 'John Doe';
// console.log(myName);
// const h1 = document.querySelector('.heading-primary');
// console.log(h1);

// h1.textContent = myName;
// h1.style.backgroundColor = 'red';
// h1.style.padding = '5rem';

// h1.addEventListener('click', function () {
//     h1.textContent = myName;
//     h1.style.backgroundColor = 'red';
//     h1.style.padding = '5rem';
// });
const sectionHeroEl = document.querySelector('.section-hero')
// Set Current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear(); // Getting current year
console.log(currentYear);
yearEl.textContent = currentYear;
// yearEl.textContent = new Date().getFullYear();

// Mobile Navigation
const btnNavEl = document.querySelector('.btn-mobile-nav'); // Selecting mobile nav button
const headerEl = document.querySelector('.header'); // Selecting header element

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
});

// Smooth Scrolling animation
const allLinks = document.querySelectorAll('a:link'); // Select all links
console.log(allLinks);
allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Preventing default action
        const href = link.getAttribute('href');
        // console.log(href);

        // Scroll back to top
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });


        }

        // Scroll to other links
        if (href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: 'smooth' });
        }
        // Close Mobile Nav
        if (link.classList.contains('nav-link')) {
            headerEl.classList.remove('nav-open'); // Close mobile nav
        }
    });
});

// Sticky Navigation
const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0]; // Destructuring
    console.log(ent);
    if (!ent.isIntersecting) {
        document.body.classList.add('sticky'); // Add sticky class
    } else {
        document.body.classList.remove('sticky'); // Remove sticky class
    }
}, {
    root: null,     // Entire viewport
    threshold: 0,   // 0% of the section
    rootMargin: '-80px', // 80px above the section
});
obs.observe(sectionHeroEl);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    let flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    let isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}
 
.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}
 
.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}
 
.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}
 
.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}
 
.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}
 
.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}
 
.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}
 
.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}
 
@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}
 
@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/