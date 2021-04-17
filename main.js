const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input error message
function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}


// Show Success outline

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}


// Check email is valid

function checkEmail(item) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(item.value.trim())){
        showSuccess(item);
    }else{
        showError(item,'Email is not valid')
    }
}






// Check Required fields
function checkRequired(inputArr){
    inputArr.forEach((item) => {
        if(item.value.trim() === '') {
            showError(item,`${getFieldName(item)}is requird`)
        }else{
            showSuccess(item)
        }
        
    });

}


// Check input length
function checkLength(item , min,max){
    if(item.value.length < min){
        showError(item, `${getFieldName(item)} must be at loast ${min}`);

    }else if(item.value.length > max){
        showError(item, `${getFieldName(item)} must be less than ${max}`);
    }else{
        showSuccess(item);
    }
}


// Check pas

function checkpassMatch(item1,item2){
    if(item1.value !== item2.value){
        showError(item2,'password do not match')

    }
}

// Get FieldName
function getFieldName(item){
    return item.id.charAt(0).toUpperCase() + item.id.slice(1);
}


// Event Listener
form.addEventListener('submit',(e) => {
    e.preventDefault()

    
    checkRequired([username,email,password,password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkpassMatch(password);
});








// if (username.value === '') {
//     showError(username,'username is required');
// } else {
//     showSuccess(username);
// }


// if (email.value === '') {
//     showError(email,'email is required');
// } else if (!isValidEmail(email.value)){
//     showError(email,'email is not valid');

// }else {

//     showSuccess(email);
// }


// if (password.value === '') {
//     showError(password,'Password is required');
// } else {
//     showSuccess(password);
// }

// if (password2.value === '') {
//     showError(password2,'Password 2 is required');
// } else {
//     showSuccess(password2);
// }