export default function contact() {
    const contact = document.createElement('div');
    contact.classList.add('contact', 'blueBg', 'bottomBorder');

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('infoBox');

    const phoneElement = document.createElement('p');
    phoneElement.innerHTML = "Call: 443-274-1853";

    const emailElement = document.createElement('p');
    emailElement.innerHTML = "Email: thebigdonut@gemail.com";

    infoContainer.append(phoneElement, emailElement);

    const textbox = document.createElement('textarea');
    textbox.setAttribute('placeholder', 'Comments? Questions? Compliments? Leave your message here!');
    textbox.setAttribute('rows', "16");
    textbox.classList.add('textbox');

    const submit = document.createElement('input');
    submit.setAttribute('type', 'button');
    submit.value = 'Send';
    submit.classList.add('send');

    const received = document.createElement('p');
    received.innerHTML = "Thanks! We'll reply shortly if needed.";
    received.classList.add('received', 'animatedOpacity');
 
    submit.onclick = () => {
        if(received.parentNode){
            received.parentNode.removeChild(received);
            console.log(textbox.value);
        }
        contact.append(received);
    }

    contact.append(infoContainer, textbox, submit);

    return contact
}