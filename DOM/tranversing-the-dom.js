// Tranversing the DOM assignment

// 1. Get the header element

const header = document.getElementsByTagName('header')[0];
console.log(header);

// 2. Get all the section elements

const allSection = document.querySelectorAll('section');
console.log(allSection);

// 3. Get the section element with class="current"
const inCurrent = document.getElementsByClassName('current');
console.log (inCurrent);

// 4. Get the section that comes after the current section
const sectionOne = document.querySelector('section.current');
console.log(sectionOne);

// 5. Get the h2 node from the section before the 'current' section
const prev = sectionOne.previousElementSibling;
console.log(prev);

// 6. Get the div that contains the section that has an h2 with a class of 'highlight'
const div = document.querySelector('h2.highlight');
console.log(div);

// 7. Get all the sections that contain an H2 (using a single statement);
const h2Section = document.querySelectorAll('h2');
console.log(h2Section);

