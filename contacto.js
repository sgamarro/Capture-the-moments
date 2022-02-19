const form = document.querySelector(".contact-form")
form.addEventListener("submit",e =>{
    let name = document.querySelector('.name').value
    let email = document.querySelector('.email').value
    let message = document.querySelector('.message').value
    
    sendEmail(name,email,message)
});




function sendEmail(name,email,message) {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "s.albertogamarro5@gmail.com",
        Password : "daorklpkdpcppaer",
        To : 's.albertogamarro5@gmail.com',
        From : 's.albertogamarro5@gmail.com',
        Subject : `Has recivido un mensaje de ${name}`,
        Body : `Email: ${email} <br/> ${message}`
    }).then(
      message => alert("mail has succesfully sent")
    );
}