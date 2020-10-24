const image = document.querySelector(' .avatarUn');
image.addEventListener('click', function () {
  image.src = 'image/avatar2.svg';
});

const button = document.querySelector('.button');
button.style.background = 'pink';
button.style.color = 'white';
button.style.width = '150px';
button.style.height = '50 px';

button.addEventListener('click', function () {
  const changeName = document.querySelector('#name');
  newName = prompt('Enter your name');
  changeName.innerHTML = newName;
  changeName.style.color = 'white';
});

button.addEventListener('click', function () {
  const changeName = document.querySelector('.description ');
  changeName.style.background = '#750ff7';
  button.style.background = '#750ff7';
});

const color = document.querySelectorAll('.pink-text');
for (let i = 0; i < color.length; i += 1) {
  if (color[i].style.backgroundColor != newName) {
    color[i].style.backgroundColor = newName;
  }
}

/*  bonu1 */

const buttonBonus = document.querySelector('#boutonBonus');
buttonBonus.style.background = 'pink';
buttonBonus.style.color = 'white';
buttonBonus.style.width = '150px';
buttonBonus.style.height = '50 px';
