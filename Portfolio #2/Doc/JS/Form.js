const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_61ij37j';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      swal("Good job!", "El mensaje ha sido enviado!", "success");
    }, (err) => {
      btn.value = 'Enviar';
      swal("Error!", "Ha habido un error al enviar el mensaje!", "error");
    });
});