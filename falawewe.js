let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
//this validates the contact us form
//if a field is empty an alert will pop up and show error message. if all well and good an alert will pop up showing succesful form submission
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    
    if (name === '' || email === '' || phone === '') {
        alert("Fields cannot be empty!");
        return false;
    } else {
        alert("Thank you for contacting us, we will be in touch shortly.");
        return true;
}
}
