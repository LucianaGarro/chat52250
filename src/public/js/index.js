//SOMOS EL CLIENTE
const socket = io();

//  Swal.fire({
//      title: 'Saludos',
//     text: 'Mensaje inicial',
//      icon: 'success'
//  })

let user;
const chatbox = document.getElementById('chatBox');

Swal.fire({
    title: 'Identifiquesé',
    input: 'text',
    text: 'Ingrese su nombre de usuario para ingresar en la sala de chat',
    inputValidator: (value) =>{
        return !(value) && "Necesitas ingresar un nombre de usuario para acceder al chat"
    },
    allowOutsideClick: false,
    allowEscapeKey: false
}).then (result =>{
    user= result.value;
    socket.emit ('authenticated', user);
});

chatbox.addEventListener( 'keyup', evt =>{
    if (evt.key === 'Enter'){
        if(chatbox.value.trim().length > 0){
            socket.emit('message', {user, message: chatbox.value});
            chatbox.value = '';
        }
    }
})


