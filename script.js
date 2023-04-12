const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const menuItem = document.querySelector('.menu-item-desktop');
const items = document.querySelectorAll('.menuItemDesktop');
const seeProject = document.querySelector('.primary-btn-2');
const body = document.querySelector('body');

items.forEach((e) => {
  e.addEventListener('click', () => {
    menuItem.querySelector('.active').classList.remove('active');
    e.classList.add('active');
  });
});

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

seeProject.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
  <div class="popup-container">
    <div class="work-card-text">
      <h3>Project name goes here</h3>
      <div>
        <ul class="lang-container">
          <li>
          <h4 id="lang">HTML/CSS</h4>
          </li>
          <li>
            <h4 id="lang">Ruby on Rails</h4>
          </li>
          <li>
            <h4 id="lang">JavaScript</h4>
           </li>
        </ul>
      </div>
    </div>
      <button class="close close-popup" type="button"><i class="closeIcon material-icons">close</i></button>
  </div>
  `;

  main.appendChild(popup);
  body.appendChild(main);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    body.removeChild(main);
  });
});
