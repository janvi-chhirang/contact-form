const successMessage = document.querySelector('.pop-up')
const form = document.querySelector('.container-box')
const submit = document.querySelector('button')
const firstNmae_error = document.querySelector('.first_name-error')
const lastNmae_error = document.querySelector('.last_name-error')
const mail_error = document.querySelector('.email_name-error')
const checkbox = document.querySelector('#consent')
const checkBox_error = document.querySelector('.imp')
const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const mail = document.querySelector('.email')
const radio = document.querySelector('.s-by-s')
const radio_error = document.querySelector('.radio-error')
const message = document.querySelector('textarea')
const message_error = document.querySelector('.message-error')
const rdb1 = document.querySelector('#general-enquiry')
const rdb2 = document.querySelector('#support-request')
// let selected=document.querySelector("input[name='option']:checked");

function isValidate(input_value) {
  if (input_value == '') {
    return false
  } else {
    return true
  }
}

submit.addEventListener('click', () => {
  //first name validation check
  if (!isValidate(firstName.value)) {
    firstNmae_error.setAttribute('id', 'error')
    document.querySelector('.content-one .input-container').style.borderColor = "red";
    document.querySelector('.content-one .input-container').style.borderWidth = "2px";
  } else {
    firstNmae_error.removeAttribute('id')
    document.querySelector('.content-one .input-container').style.borderColor = "black";
    document.querySelector('.content-one .input-container').style.borderWidth = "1px";
  }

  //last name validation check
  if (!isValidate(lastName.value)) {
    lastNmae_error.setAttribute('id', 'error')
    document.querySelector('.content-two .input-container').style.borderColor = "red";
    document.querySelector('.content-two .input-container').style.borderWidth = "2px";
  } else {
    lastNmae_error.removeAttribute('id')
    document.querySelector('.content-two .input-container').style.borderColor = "black";
    document.querySelector('.content-two .input-container').style.borderWidth = "1px";
  }

  //email validation check
  if (!isValidate(mail.value)) {
    mail_error.setAttribute('id', 'error')
    document.querySelector('.content-three .input-container').style.borderColor = "red";
    document.querySelector('.content-three .input-container').style.borderWidth = "2px";
  } else {
    mail_error.removeAttribute('id')
    document.querySelector('.content-three .input-container').style.borderColor = "black";
    document.querySelector('.content-three .input-container').style.borderWidth = "1px";
  }

  //query type validation check
  if (rdb1.checked != true && rdb2.checked != true) {
    radio_error.setAttribute('id', 'error')
    document.querySelector('.radio-one').style.borderColor = "red";
    document.querySelector('.radio-one').style.borderWidth = "2px";
    document.querySelector('.radio-two').style.borderColor = "red";
    document.querySelector('.radio-two').style.borderWidth = "2px";
  } else {
    radio_error.removeAttribute('id')
    document.querySelector('.radio-one').style.borderColor = "black";
    document.querySelector('.radio-one').style.borderWidth = "1px";
    document.querySelector('.radio-two').style.borderColor = "black";
    document.querySelector('.radio-two').style.borderWidth = "1px";
  }

  //message validation check
  if (!isValidate(message.value)) {
    message_error.setAttribute('id', 'error')
    document.querySelector('.message').style.borderColor = "red";
    document.querySelector('.message').style.borderWidth = "2px";
  } else {
    message_error.removeAttribute('id')
    document.querySelector('.message').style.borderColor = "black";
    document.querySelector('.message').style.borderWidth = "1px";
  }

   //change styling on submitting the form
  if (
    isValidate(firstName.value) &&
    isValidate(lastName.value) &&
    isValidate(mail.value) &&
    checkbox.checked &&
    isValidate(message.value) && 
    (rdb1.checked==true || rdb2.checked==true)
  ){
    document.querySelector('.content-one .input-container').style.borderColor = "green";
    document.querySelector('.content-one .input-container').style.borderWidth = "2px";
    document.querySelector('.content-two .input-container').style.borderColor = "green";
    document.querySelector('.content-two .input-container').style.borderWidth = "2px";
    document.querySelector('.content-three .input-container').style.borderColor = "green";
    document.querySelector('.content-three .input-container').style.borderWidth = "2px";
    if(rdb1.checked==true){
      document.querySelector('.radio-one').style.borderColor = "green";
      document.querySelector('.radio-one').style.borderWidth = "2px";
    }else{
      document.querySelector('.radio-two').style.borderColor = "green";
      document.querySelector('.radio-two').style.borderWidth = "2px";
    }
    document.querySelector('.message').style.borderColor = "green";
    document.querySelector('.message').style.borderWidth = "2px";
  }



  //submit button functioning
  if (
    isValidate(firstName.value) &&
    isValidate(lastName.value) &&
    isValidate(mail.value) &&
    checkbox.checked &&
    isValidate(message.value) && 
    (rdb1.checked==true || rdb2.checked==true)
  ) {
    successMessage.setAttribute('id', 'submitted')
  }
})

