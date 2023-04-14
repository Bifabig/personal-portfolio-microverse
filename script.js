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
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis nemo vitae tempora et magni in corporis earum illum cupiditate repudiandae, amet nihil reprehenderit voluptatum tempore eligendi deserunt id adipisci.',
    featuredimg: './assets/img/laptop.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linklive: 'http://google.com',
    linksrc: 'http://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis nemo vitae tempora et magni in corporis earum illum cupiditate repudiandae, amet nihil reprehenderit voluptatum tempore eligendi deserunt id adipisci.',
    featuredimg: './assets/img/laptop 2.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linklive: 'http://google.com',
    linksrc: 'http://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis nemo vitae tempora et magni in corporis earum illum cupiditate repudiandae, amet nihil reprehenderit voluptatum tempore eligendi deserunt id adipisci.',
    featuredimg: './assets/img/laptop 3.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linklive: 'http://google.com',
    linksrc: 'http://github.com',
  },
  {
    name: 'Project 4',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis nemo vitae tempora et magni in corporis earum illum cupiditate repudiandae, amet nihil reprehenderit voluptatum tempore eligendi deserunt id adipisci.',
    featuredimg: './assets/img/laptop 4.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linklive: 'http://google.com',
    linksrc: 'http://github.com',
  },
  {
    name: 'Project 5',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis nemo vitae tempora et magni in corporis earum illum cupiditate repudiandae, amet nihil reprehenderit voluptatum tempore eligendi deserunt id adipisci.',
    featuredimg: './assets/img/laptop 5.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linklive: 'http://google.com',
    linksrc: 'http://github.com',
  },
  {
    name: 'Project 6',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis nemo vitae tempora et magni in corporis earum illum cupiditate repudiandae, amet nihil reprehenderit voluptatum tempore eligendi deserunt id adipisci.',
    featuredimg: './assets/img/laptop 6.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linklive: 'http://google.com',
    linksrc: 'http://github.com',
  },
];

// dynamic card
const cardContainer = document.querySelector('.works');
const cardMethods = () => {
  cardData.map((cardData) => {
    const postElement = document.createElement('div');
    postElement.classList.add('work-card');
    postElement.innerHTML = `
    <img src="${cardData.featuredimg}" alt="" />
    <div class="work-card-text">
    <h3 id="name">${cardData.name}</h3>
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
      <img class="laptop-1" src="${cardData[i].featuredimg}" alt="" />
  
      <div class="popup-image-sm">
        <img class="laptop-1" src="${cardData[i].featuredimg}" alt="" />
        <img class="laptop-1" src="${cardData[i].featuredimg}" alt="" />
        <img class="laptop-1" src="${cardData[i].featuredimg}" alt="" />
        <img class="laptop-1" src="${cardData[i].featuredimg}" alt="" />
      </div>
    </div>
  
    <div class="popup-text">
      <p>
      ${cardData[i].description}
      </p>
  
      <div class="popup-buttons">
      <button class="primary-btn-2">
      <a class="link-btn" href="${cardData[i].linklive}"/>See live</a>
                <span class="material-symbols-outlined">
                  open_in_new
                </span>
                <style>
                .material-symbols-outlined {
                  font-variation-settings:
                    'FILL' 0,
                    'wght' 400,
                    'GRAD' 0,
                    'opsz' 48
                  }
                </style>
  
      </button>
  
      <button class="primary-btn-2">
      <a class="link-btn" href="${cardData[i].linksrc}"/>See source</a>
      <span class="material-symbols-outlined">
      open_in_new
      </span>
      <style>
        .material-symbols-outlined {
          font-variation-settings:
          'FILL' 0,
          'wght' 400,
          'GRAD' 0,
          'opsz' 48
        }
        </style>
  
        </button>
  
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
  const emailRegex =
    /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

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
    EMAIL_INVALID
  );
  // if valid, submit the form.
  if (nameValid && emailValid) {
    event.currentTarget.submit();
  }
});
