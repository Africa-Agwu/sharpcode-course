// var retry = formValidation();
function formValidation() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email == 'sharpcode@gmail.com' && password == 'sharpcode') {
        alert('You have successfully logged in. Welcome Admin');
        window.location = 'registration.html';

    }
    else{        
            alert('Incorrect Email or Password');
            //return false;
        }
    }

document.getElementById("submit").addEventListener("click", function(){
    formValidation();
});