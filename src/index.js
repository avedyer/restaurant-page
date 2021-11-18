console.log("testing testing");

import './styles.css';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import interior from './restaurant-interior.jpg';

function header () {
    const header = document.createElement('header');

    const headerImg = new Image();
    headerImg.src = interior;

    header.appendChild(headerImg);

    return header;
}

function nav () {
    const nav = document.createElement('nav');

    const links = [];

    const homeLink = document.createElement('div');
    homeLink.innerHTML = 'Home';

    const menuLink = document.createElement('div');
    menuLink.innerHTML = 'Menu';

    const contactLink = document.createElement('div');
    contactLink.innerHTML = 'Contact';

    links.push(homeLink, menuLink, contactLink);

    for (let link of links) {
        link.onclick = () => {
            console.log(`clicked ${link.innerHTML}`);
            switchTab(link.innerHTML);
        }
    }

    nav.append(...links);

    return nav;
}

const content = document.getElementById('content');

function switchTab(tab) {
    while (content.childNodes[2]) {
        content.removeChild(content.childNodes[2]);
    }
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
