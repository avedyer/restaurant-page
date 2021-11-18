export default function nav () {
    const nav = document.createElement('nav');

    const tabs = ['Home', 'Menu', 'Contact']

    const homeLink = document.createElement('div');
    homeLink.innerHTML = 'Home'

    const menuLink = document.createElement('div');
    menuLink.innerHTML = 'Menu'

    const contactLink = document.createElement('div');
    contactLink.innerHTML = 'Contact'

    nav.append(homeLink, menuLink, contactLink)

    return nav;
}