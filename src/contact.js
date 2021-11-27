export default function contact() {
    const contact = document.createElement('form');
    contact.classList.add('contact');

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
    received.classList.add('invisible', 'received');

    submit.onclick = () => {
        received.classList.remove('invisible');
    }

    contact.append(textbox, submit, received);

    return contact
}