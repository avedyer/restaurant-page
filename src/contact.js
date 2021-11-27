export default function contact() {
    const contact = document.createElement('form');
    contact.classList.add('contact', 'blueBg', 'bottomBorder');

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
        }
        contact.append(received);
        textbox.value = '';
    }

    contact.append(textbox, submit);

    return contact
}