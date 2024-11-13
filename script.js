const xhr = new XMLHttpRequest();
function takeJoke(){
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);

      const joke = document.querySelector('.joke');
      joke.innerHTML = data.value;

    }
  };
  xhr.send();
}

takeJoke();
let btn = document.querySelector('.btn');
btn.addEventListener('click', takeJoke);
