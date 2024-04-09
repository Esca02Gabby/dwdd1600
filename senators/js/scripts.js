import { senators } from '../data/senators.js'
console.log(senators)

// tag the HTML elements
const myNavigation = document.querySelector('nav')
const myParent = document.querySelector('#peopleHere')

// create an all people button
const btnAll = document.createElement('button')
btnAll.textContent = 'All Senators'
btnAll.addEventListener('click', () => displayPeople(senators))

// create a female button
const btnFemale = document.createElement('button')
btnFemale.textContent = 'Female Senators'
btnFemale.addEventListener('click', () => {
    const arrayFemale = senators.filter(person => person.gender === 'F')
    displayPeople(arrayFemale)
})

// create a male button
const btnMale = document.createElement('button')
btnMale.textContent = 'Male Senators'
btnMale.addEventListener('click', () => {
    const arrayMale = senators.filter(person => person.gender === 'M')
    displayPeople(arrayMale)
})

// create a Republican button
const btnRepublican = document.createElement('button')
btnRepublican.textContent = 'Republican Senators'
btnRepublican.addEventListener('click', () => {
    const arrayRepublican = senators.filter(person => person.party === 'R')
    displayPeople(arrayRepublican)
})

// create a Democrat button
const btnDemocrat = document.createElement('button')
btnDemocrat.textContent = 'Democrat Senators'
btnDemocrat.addEventListener('click', () => {
    const arrayDemocrat = senators.filter(person => person.party === 'D')
    displayPeople(arrayDemocrat)
})

// add buttons to page
myNavigation.appendChild(btnAll)
myNavigation.appendChild(btnFemale)
myNavigation.appendChild(btnMale)
myNavigation.appendChild(btnRepublican)
myNavigation.appendChild(btnDemocrat)

// loop through all the people
function displayPeople(people) {
    myParent.textContent = "";

    people.forEach(person => {
        const myFigure = document.createElement('figure');
        const myImage = document.createElement('img');
        const charNumber = person.govtrack_id;
        myImage.src = `https://www.govtrack.us/static/legislator-photos/${charNumber}-100px.jpeg`;
        myImage.alt = `${person.first_name} ${person.last_name}`;

        const myCaption = document.createElement('figcaption');
        const party = person.party === 'R' ? 'Republican' : person.party === 'D' ? 'Democrat' : 'Independent';
        myCaption.textContent = `${person.short_title} ${person.first_name} ${person.last_name} (${party} - ${person.state})`;

        myFigure.className = person.gender === 'F' ? 'female' : person.gender === 'M' ? 'male' : 'other';
        myFigure.classList.add(person.party === 'R' ? 'republican' : person.party === 'D' ? 'democrat' : 'independent');

        myFigure.appendChild(myImage);
        myFigure.appendChild(myCaption);
        myParent.appendChild(myFigure);
    })
}


displayPeople(senators);
