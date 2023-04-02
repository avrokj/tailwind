function myBurger() {
  var x = document.getElementById('nav');
  if (x.className === 'nav') {
    x.className += 'responsive';
  } else {
    x.className = 'nav'
  }
}

function myBurgerIcon(x) {
  x.classList.toggle('change')
}

const d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();