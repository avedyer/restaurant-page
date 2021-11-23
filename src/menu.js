export default function menu() {
    class MenuItem {
        constructor(name, image, price, available) {
            this.name = name
            this.image = image
            this.price = price
            this.availabe = available
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

    const imgFolder = "../src/donuts/"

    const menu = document.createElement('menu');

    for (const item of menuItems) {

        console.log(item.image);
        let newItemElement = document.createElement('div');
        newItemElement.classList.add('menuItem');

        let newImgLocation = imgFolder.concat(item.image)

        newItemElement.style.backgroundImage = `url(${newImgLocation})`;
        
        let newNameElement = document.createElement('div');
        newNameElement.classList.add('itemName');
        newNameElement.innerHTML = item.name;

        newItemElement.append(newNameElement);
        
        console.log(newItemElement.style.backgroundImage);

        menu.append(newItemElement);
    }

    return menu
}