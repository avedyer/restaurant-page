function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('./donuts', false, /\.(png|jpe?g|svg)$/));

console.log(images);

export default function menu() {
    class MenuItem {
        constructor(name, image, price, available) {
            this.name = name
            this.image = image
            this.price = price
            this.available = available
        }
    }

    let menuItems = [
        new MenuItem('Glazed', 'glazed.png', '1.49', true),
        new MenuItem('Frosted Strawberry', 'frosted-strawberry.png', '1.99', true),
        new MenuItem('Frosted Chocolate', 'frosted-chocolate.png', '1.99', true),
        new MenuItem('Chocolate Custard', 'chocolate-custard.png', '2.49', true),
        new MenuItem('Jelly', 'jelly.png', '1.99', true),
        new MenuItem('Cookie Cat', 'cookie-cat.png', '1.99', false)
    ]

    const menu = document.createElement('menu');

    for (const item of menuItems) {

        let newBackgroundElement = document.createElement('img')
        newBackgroundElement.src = images[item.image];
        newBackgroundElement.classList.add('menuIcon');

        let newItemElement = document.createElement('div');
        newItemElement.classList.add('menuItem');
        
        let newInfoElement = document.createElement('div');
        newInfoElement.classList.add('itemInfo');

        let newNameElement = document.createElement('div');
        newNameElement.innerHTML = item.name;
        newNameElement.classList.add('itemName');

        let newPriceElement = document.createElement('div');
        newPriceElement.innerHTML = item.price;
        newPriceElement.classList.add('itemPrice');

        newInfoElement.append(newNameElement, newPriceElement);

        newItemElement.append(newBackgroundElement, newInfoElement);

        if (!item.available) {newItemElement.classList.add('unavailable')};

        menu.append(newItemElement);
    }

    return menu
}