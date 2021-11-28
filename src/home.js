import logo from './logo.png';

export default function home () {
    const home = document.createElement('div');
    home.classList.add('blueBg', 'bottomBorder', 'home');

    const aboutElement = document.createElement('p');
    aboutElement.classList.add('about');
    aboutElement.innerHTML = "The best donuts in Beach City, right off the Boardwalk!"

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('infoGrid');

    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('infoCell')

    const hoursHeaderElement = document.createElement('h3');
    hoursHeaderElement.innerHTML = "Hours"

    const hoursElement = document.createElement('p');
    hoursElement.innerHTML = ("MON-THU: 11am-7pm</br>FRI-SAT: 11am-9pm</br>SUN: 9am-4pm");

    hoursContainer.append(hoursHeaderElement, hoursElement);

    const locationContainer = document.createElement('div');
    locationContainer.classList.add('infoCell')

    const locationHeaderElement = document.createElement('h3');
    locationHeaderElement.innerHTML = "Location";

    const locationElement = document.createElement('p');
    locationElement.innerHTML = ("16 Boardwalk Drive</br>Beach City, Delmarva, 93204")

    locationContainer.append(locationHeaderElement, locationElement);

    infoContainer.append(hoursContainer, locationContainer);

    const logoImg = new Image();
    logoImg.src = logo;

    home.append(aboutElement, infoContainer, logoImg);

    return home;
}