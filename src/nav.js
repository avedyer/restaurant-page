export default function nav () {
    const nav = document.createElement('nav');

    let tabs = [];

    const homeLink = document.createElement('div');
    homeLink.innerHTML = 'Home'

    const menuLink = document.createElement('div');
    menuLink.innerHTML = 'Menu'

    const contactLink = document.createElement('div');
    contactLink.innerHTML = 'Contact'

    tabs.push(homeLink, menuLink, contactLink);

    for (let tab of tabs) {
        tab.classlist.add('tab');
    }

    nav.append(...tabs);

    return nav;
}