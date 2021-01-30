// JavaScript source code
function fadeImage(I) {
    var Image = '#' + I;
    //String concatenation
    $(Image).fadeIn();
    $(Image).fadeOut(3000, function () { fadeImage((I == 1) ? 9 : I - 1); });
}
fadeImage(I);

function genderValidation() {
    if (document.getElementById("male").checked) {
        document.getElementById('gender-check').style.visibility = "hidden";
    }
    else if (document.getElementById("female").checked) {
        document.getElementById('gender-check').style.visibility = "visible";
    }
    else {
        document.getElementById('gender-check').style.visibility = "hidden";
    }
    var divObj = document.getElementById("gender-check");
    divObj.style.display = "block";
}
genderValidation();

function hideGenderValidation() {
    var divobj = document.getElementById('gender-check');
    divobj.style.display = 'none';
}
hideGenderValidation();

function vaccineValidation() {
    var age = document.getElementById("age").value;
    var pregnant = document.getElementsByName("pregnancy")
    var text;
    if (document.getElementById("female").checked) {
        for (var i = 0; i < pregnant.length; i++) {
            if (pregnant[i].checked && age >= 1) {
                if (pregnant[i].value == "Y") {
                    text = "You should not receive the vaccine yet until more information is available.";
                }
                else {
                    if (age >= 16) {
                        text = "You are eligible to take the vaccine. When you submit the form, our staff will contact you to inform you about the schedule and the procedure in 3 to 5 working days."
                    }
                    else if (age >= 1 && age < 16) {
                        text = "You should not receive the vaccine yet until more information is available.";
                    }
                }
            }
        }
    }
    else if (document.getElementById("male").checked) {
        if (age >= 16) {
            text = "You are eligible to take the vaccine. When you submit the form, our staff will contact you to inform you about the schedule and the procedure in 3 to 5 working days."
        }
        else if (age >= 1 && age < 16) {
            text = "You should not receive the vaccine yet until more information is available.";
        }
        else {
            text = "";
        }
    }
    else {
        text = "";
    }
    if (age >= 1 && (document.getElementById("male").checked || document.getElementById("female").checked)) {
        if (document.getElementById("female").checked) {
            for (var i = 0; i < pregnant.length; i++) {
                if (pregnant[i].checked) {
                    document.getElementById("displayvalidation").innerHTML = text;
                }
            }
        }
        else {
            document.getElementById("displayvalidation").innerHTML = text;
        }
        
    }
       

    
}
vaccineValidation();

function confirmationText() {
    var confirm; 
    var name = document.getElementById("name").value;
    var ic = document.getElementById("nric").value;
    var age = document.getElementById("age").value;
    var number = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var postalcode = document.getElementById("postalcode").value;
    if (name != "" && ic != "" && number != "" && age>0 && address!="" & postalcode!="")  {
        confirm = "Dear " + name + ", we have received your submission. If there are any missing information, our staff will find out more from you. Thank you!"
    }
    else {
        confirm="Your submission is invalid!"
    }
   
   document.getElementById("displaycfmtext").innerHTML = confirm;
}
confirmationText();