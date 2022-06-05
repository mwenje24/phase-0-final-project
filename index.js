const contactMessage = document.querySelector('#contactMessage');
const username = document.querySelector('#name');
const email  = document.querySelector('#email');
const message  = document.querySelector('#message');
const msgerr  = document.querySelector('.msgerr');

contactMessage.addEventListener('submit', onSubmit);

function onSubmit(e){
  e.preventDefault();

  if(username.value === '' || email.value === '' || message.value === ''){
    msgerr.classList.add('error');
    msgerr.innerHTML = 'please enter all fields';

    setTimeout(() => msgerr.remove(), 3000);
  }
  else{
    const usernamevalue = username.value;
    alert(`Thank you (${usernamevalue } your message has been send`)
    //clear fields
    username.value = '';
    email.value  = '';
    message.value= '';
  }
}