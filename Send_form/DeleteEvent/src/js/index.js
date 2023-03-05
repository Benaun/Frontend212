const button = document.querySelector("#my-button");

const handleClick = event => {
  console.log(event.currentTarget.textContent);
};

button.addEventListener("click", handleClick);

setTimeout(() => {
    button.removeEventListener("click", handleClick);
}, 1500);
