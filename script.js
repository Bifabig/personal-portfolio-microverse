const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const menuItem = document.querySelector('.menu-item-desktop');
const items = document.querySelectorAll('.menuItemDesktop');

const body = document.querySelector('body');
const cardData = [
  {
    name: 'Space Travelers\' Hub',
    description:
      'Space Travelers\' Hub is a web application that uses real live data from the SpaceX API. It provides information on commercial and scientific space travel services. The application also allows users to book rockets and join selected space missions.',
    featuredimg: [
      './assets/img/space-travelers-hub-1.png',
      './assets/img/space-travelers-hub-2.png',
      './assets/img/space-travelers-hub-3.png',
    ],
    technologies: ['CSS', 'React', 'Redux'],
    linklive: 'https://space-travelers-hub-cz9s.onrender.com',
    linksrc: 'https://github.com/Bifabig/space-travelers-hub-react-redux',
  },
  {
    name: 'Math Magicians',
    description:
      'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: - Make simple calculations. - Read a random math-related quote.',
    featuredimg: [
      './assets/img/math-magicians-1.png',
      './assets/img/math-magicians-2.png',
      './assets/img/math-magicians-3.png',
    ],
    technologies: ['SASS', 'React', 'React Router'],
    linklive: 'https://64a55938928acb009063a982--mathmagicianbiftu.netlify.app/',
    linksrc: 'https://github.com/Bifabig/math-magicians/',
  },
  {
    name: 'Star Wars',
    description:
      'Star Wars project is a web application based on an external API. We chose an API that provides data about Star Wars Movies and then built the webapp around it. The webapp has 2 user interfaces: A home page showing a list of movies that you can "like." A popup window with more data about a movie',
    featuredimg: [
      './assets/img/star-wars-1.png',
      './assets/img/star-wars-2.png',
      './assets/img/star-wars-3.png',
    ],
    technologies: ['CSS', 'HTML', 'JavaScript'],
    linklive: 'https://marcodiaz2000.github.io/Star-Wars-Projects/dist/',
    linksrc: 'https://github.com/MarcoDiaz2000/Star-Wars-Projects',
  },
  {
    name: 'Digital Marketing Summit',
    description:
      'Digital Marketing Summit is a conference website for digital marketing enthusiasts.',
    featuredimg: [
      './assets/img/digital-marketing-summit-1.png',
      './assets/img/digital-marketing-summit-2.png',
      './assets/img/digital-marketing-summit-3.png',
    ],
    technologies: ['CSS', 'HTML', 'JavaScript'],
    linklive: 'https://bifabig.github.io/digital-marketing-summit/',
    linksrc: 'https://github.com/Bifabig/digital-marketing-summit',
  },
  {
    name: 'Awesome Books',
    description:
      'Awesome Books is a simple website that takes the title and author values and creates a list of books using JavaScript DOM and ES6 syntax.',
    featuredimg: [
      './assets/img/awesome-books-1.png',
      './assets/img/awesome-books-2.png',
      './assets/img/awesome-books-3.png',
    ],
    technologies: ['CSS', 'HTML', 'JavaScript'],
    linklive: 'hhttps://bifabig.github.io/awesome-books-es6/',
    linksrc: 'https://github.com/Bifabig/awesome-books-es6',
  },
  {
    name: 'Stocks & Balance sheet',
    description:
      'Stocks & Balance sheet is a mobile application that fetches company stock symbols and balance sheet data for NYSE and other stocks from an API.',
    featuredimg: [
      './assets/img/stocks-1-2.png',
      './assets/img/stocks-2.png',
      './assets/img/stocks-3.png',
    ],
    technologies: ['CSS', 'React', 'Redux'],
    linklive: 'https://64a02ced6243bb327540b000--balancesheet-biftu.netlify.app',
    linksrc: 'https://github.com/Bifabig/react-redux-capstone',
  },
];

// dynamic card
const cardContainer = document.querySelector('.works');
const cardMethods = () => {
  cardData.map((cardData) => {
    const postElement = document.createElement('div');
    postElement.classList.add('work-card');
    postElement.innerHTML = `
    <img src="${cardData.featuredimg[0]}" alt="" />
    <div class="work-card-text">
    <h3>${cardData.name}</h3>
    <div>
        <ul class="lang-container">
          <li>
            <h4 id="lang">${cardData.technologies[0]}</h4>
          </li>
          <li>
            <h4 id="lang">${cardData.technologies[1]}</h4>
          </li>
          <li>
            <h4 id="lang">${cardData.technologies[2]}</h4>
          </li>
        </ul>
      </div>
      <button class="primary-btn-2">
              See this project
              <span class="material-symbols-outlined">
                arrow_forward
                </span>
              <style>
                .material-symbols-outlined {
                  font-variation-settings:
                  'FILL' 0,
                  'wght' 600,
                  'GRAD' 0,
                  'opsz' 48
                }
                </style>
                
            </button>
    </div>
    `;
    return cardContainer.appendChild(postElement);
  });
};

cardMethods();

// active class
items.forEach((e) => {
  e.addEventListener('click', () => {
    menuItem.querySelector('.active').classList.remove('active');
    e.classList.add('active');
  });
});

// hamburger toggle
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

closeIcon.style.display = 'none';
menuIcon.style.display = 'block';

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => menuItem.addEventListener('click', toggleMenu));

// popup window
const seeProject = document.querySelectorAll('.primary-btn-2');

let i = 0;
while (i < seeProject.length) {
  const main = document.createElement('div');
  main.className = 'main';
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <div class="popup-container">
      <div class="work-card-text">
        <h3>${cardData[i].name}</h3>
        <div>
          <ul class="lang-container">
            <li>
            <h4 id="lang">${cardData[i].technologies[0]}</h4>
            </li>
            <li>
              <h4 id="lang">${cardData[i].technologies[1]}</h4>
            </li>
            <li>
              <h4 id="lang">${cardData[i].technologies[2]}</h4>
             </li>
          </ul>
        </div>
      </div>
        <button class="close close-popup" type="button"><i class="closeIcon material-icons">close</i></button>
  
    </div>
    <div class="popup-image">
      <img class="popup-image-1" src="${cardData[i].featuredimg[0]}" alt="" />
  
      <div class="popup-image-sm">
        
          <img class="popup-image-sm-1" src="${cardData[i].featuredimg[1]}" alt="" />
        
        
          <img class="popup-image-sm-1" src="${cardData[i].featuredimg[2]}" alt="" />
        
      </div>
    </div>
  
    <div class="popup-text">
      <p>
      ${cardData[i].description}
      </p>
  
      <div class="popup-buttons">

      <a href=${cardData[i].linklive} target=”_blank”/>
      <button class="link-btn">
      See live
                <span class="material-symbols-outlined">
                  open_in_new
                </span>
  
      </button>
      </a>
                  
      <a href=${cardData[i].linksrc} target=”_blank”/>
      <button class="link-btn">
      See source
      <span class="material-symbols-outlined">
      open_in_new
      </span>
  
        </button>
        </a>
        </div>
        </div>
        `;
  seeProject[i].addEventListener('click', () => {
    main.appendChild(popup);
    body.appendChild(main);

    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      body.removeChild(main);
    });
  });

  i += 1;
}

// show a message with a type of the input
function showMessage(input, message, type) {
  // get the small element and set the message
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  // update the class for the input
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email format
  const emailRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:.[a-z0-9-]+)*$/;

  const email = input.value.trim();

  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('.contact');

const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format';

form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  // validate the form
  const nameValid = hasValue(form.elements.name, NAME_REQUIRED);
  const emailValid = validateEmail(
    form.elements.email,
    EMAIL_REQUIRED,
    EMAIL_INVALID,
  );
  // if valid, submit the form.
  if (nameValid && emailValid) {
    event.currentTarget.submit();
  }
});

form.addEventListener('input', () => {
  const fullname = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const formData = { fullname, email, message };

  window.localStorage.setItem('formData', JSON.stringify(formData));
});

// preserve data in local storage
const formData = window.localStorage.getItem('formData');
if (formData) {
  const formValues = JSON.parse(formData);

  document.getElementById('name').value = formValues.fullname;
  document.getElementById('email').value = formValues.email;
  document.getElementById('message').value = formValues.message;
}
