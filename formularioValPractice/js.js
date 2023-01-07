const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cPassword = document.querySelector("#cPassword");

// SHOW ERROR MASSAGE

function showError(input, massage){
    const formControl = input.parentElement;
    formControl.className = "input error";
    const small = formControl.querySelector("small");
    small.innerText = massage;
}

// SHOW SUCCESS MASSAGE

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.classList.add("success");
}

// CHECK REQUIRED FIELDS 

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if (input.value.trim() === ""){
            showError(input, `${getFieldName(input)} is required`);
        }else {
            showSuccess(input)
        }
    });
}

// GET FIELD NAME

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// CHECK INPUT LENGHT

function checkLenght(input, min, max){
    if (input.value.lenght < min){
        showError(input, `${getFieldName(input)} must be less than ${min} characters`);
    } else if (input.value.lenght > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else {showSuccess(input);}
}

// CHECK EMAIL IS VALID

function checkEmail(input){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value.trim())){
        showSuccess(input);
    }else {
        showError(input, "E-mail is not valid");
    }
}

//CHECK PASSWORD MATCH

function checkPasswordMatch(input1, input2){
    if (input1.value !== input2.value){
        showError(input2, "Password do not match");
    }
    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        checkRequired([username, email, password, cPassword]);
        checkLenght(username, 3, 15);
        checkLenght(password, 8, 25);
        checkEmail(email);
        checkPasswordMatch(password, cPassword);
    });
}

function main(){
    showError();
}

main();