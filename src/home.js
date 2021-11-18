import plating from './plating.jpg';

export default function home () {
    const home = document.createElement('article');

    const paragraph = document.createElement('p');
    const description = "(RN) combines flavors & inspiration from the Far East & the West to create what we think is the best! Home to the original (recipe), we specialize in pizzas, as well as handmade appetizers, sandwiches, salads, and gluten friendly, vegetarian, & vegan selections. Feel free to indulge in a tiki drink or craft beer with our fantastic unique cuisine. Cheers!";

    paragraph.innerHTML = description;
    home.appendChild(paragraph);

    const platingImg = new Image();
    platingImg.src = plating;
    home.appendChild(platingImg);

    return home;
}