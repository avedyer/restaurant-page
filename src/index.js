console.log("testing testing");

import './styles.css';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import interior from './restaurant-interior.jpg';

function header () {
    const header = document.createElement('header');

    /*
    const headerImg = new Image();
    headerImg.src = interior;

    header.appendChild(headerImg);
    */

    const nameContainer = document.createElement('div');
    nameContainer.classList.add('nameContainer');

    const namePrefix = document.createElement('h2');
    namePrefix.innerHTML = "The ";

    const name = document.createElement('h1');
    name.innerHTML = "Big Donut"

    nameContainer.append(namePrefix, name);

    header.append(nameContainer);

    return header;
}

function nav () {
    const nav = document.createElement('nav');

    const tabs = [];

    const homeLink = document.createElement('div');
    homeLink.innerHTML = 'Home';

    const menuLink = document.createElement('div');
    menuLink.innerHTML = 'Menu';

    const contactLink = document.createElement('div');
    contactLink.innerHTML = 'Contact';

    tabs.push(homeLink, menuLink, contactLink);

    for (let tab of tabs) {
        tab.onclick = () => {
            switchTab(tab.innerHTML);
        }
        tab.classList.add('tab')
    }

    nav.append(...tabs);

    return nav;
}

const content = document.getElementById('content');

function switchTab(tab) {
    content.removeChild(content.childNodes[2]);
    
    switch (tab) {
        case 'Home':
            content.appendChild(home());
            break
        case 'Menu':
            content.appendChild(menu());
            break
        case 'Contact':
            content.appendChild(contact());
            break
    }
}

content.append(header(), nav(), home());
