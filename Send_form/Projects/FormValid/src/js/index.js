const name = document.querySelector("#user-name");


name.addEventListener("keydown", event => {
  if(name.value.length >= 6 && event.key === 'Tab') {
    name.classList.add('success');
    name.classList.remove('error');
  }
  if(name.value.length < 6 && event.key === 'Tab') {
    name.classList.add('error');
    name.classList.remove('success');
  }
  if(name.value.length == 0 && event.key === 'Tab') {
    name.classList.remove('success');
    name.classList.remove('error');
  }
});