document.getElementById('contact-form').addEventListener("submit", sendMail)

function sendMail(){
  
    emailjs.send('service_leu8bt9','template_scf2xi7', {
        from_name: document.getElementById("from_name").value,
        from_email: document.getElementById('from_email').value,
        message: document.getElementById('message').value
    }).then(function() {
        console.log('SUCCESS!');
    }, function(error) {
        console.log('FAILED...', error);
    });
}