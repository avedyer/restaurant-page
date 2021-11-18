import interior from './restaurant-interior.jpg';

export default function header () {
    const header = document.createElement('header');

    const headerImg = new Image();
    headerImg.src = interior;

    header.appendChild(headerImg);

    return header;
}