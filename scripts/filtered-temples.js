// Get the current year for the copyright
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Get the last modified date of the document
document.getElementById('lastModified').textContent = new Date(document.lastModified);

// Temple data array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Saratoga Springs Utah",
    location: "Saratoga Springs, Utah, United States",
    dedicated: "2023, August, 13",
    area: 97836,
    imageUrl:
        "https://www.churchofjesuschrist.org/imgs/550bf261ac7911ed8c4beeeeac1e96d814e4a849/full/1600%2C/0/default"
  },
  {
    templeName: "Brigham City Utah",
    location: "Brigham City, Utah, United States",
    dedicated: "2012, September, 23",
    area: 36000,
    imageUrl:
        "https://www.churchofjesuschrist.org/imgs/154ee0c38f920aa66074c0338fe29f535e0d0a65/full/1600%2C/0/default"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl:
        "https://www.churchofjesuschrist.org/imgs/54ac3388abacb11ef04678697a2fc2b6aa0ac4f5/full/1600%2C/0/default"
  }
];

function displayTemples(templeList) {

  const container = document.querySelector('.image-container');
  const fragment = document.createDocumentFragment();

  templeList.forEach(temple => {

    const figure = document.createElement('figure');
    figure.setAttribute('role', 'article');
    figure.setAttribute('tabindex', '0');

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';

    const figcaption = document.createElement('figcaption');

    const nameElement = document.createElement('h3');
    nameElement.textContent = temple.templeName;

    const locationElement = document.createElement('p');
    locationElement.textContent = `Location: ${temple.location}`;

    const dedicatedElement = document.createElement('p');
    dedicatedElement.textContent = `Dedicated: ${temple.dedicated}`;

    const areaElement = document.createElement('p');
    areaElement.textContent = `Area: ${temple.area} sq. ft.`;

    figcaption.append(nameElement, locationElement, dedicatedElement, areaElement);
    figure.append(img, figcaption);
    fragment.appendChild(figure);
  });

  container.innerHTML = '';
  container.appendChild(fragment);
}

// https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/37368230?start=0#overview
const FILTER_CONFIG = {
  old: {
    title: 'Old Temples',
    predicate: temple => getTempleYear(temple) < 1900
  },
  new: {
    title: 'New Temples',
    predicate: temple => getTempleYear(temple) > 2000
  },
  large: {
    title: 'Large Temples',
    predicate: temple => temple.area > 90000
  },
  small: {
    title: 'Small Temples',
    predicate: temple => temple.area < 10000
  },
  default: {
    title: 'All Temples',
    predicate: () => true
  }
};

function getTempleYear(temple) {
  return parseInt(temple.dedicated.split(', ')[0]);
}

function filterTemples(filter) {
  const filterSettings = FILTER_CONFIG[filter] || FILTER_CONFIG.default;
  const pageTitle = document.querySelector('main h2');
  pageTitle.textContent = filterSettings.title;

  const filteredTemples = temples.filter(filterSettings.predicate);
  displayTemples(filteredTemples);
}

document.addEventListener('DOMContentLoaded', () => {
  displayTemples(temples);

  const navLinks = document.querySelectorAll('#nav-list a');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = link.textContent.toLowerCase();
      filterTemples(filter);
    });
  });
});