function myBurger() {
  var x = document.getElementById('nav');
  if (x.className === 'nav hidden space-x-8 md:flex items-center justify-between w-full md:w-auto md:order-1') {
    x.className -= ' hidden';
  } else {
    x.className = 'nav hidden space-x-8 md:flex items-center justify-between w-full md:w-auto md:order-1'
  }
}

function myBurgerIcon(x) {
  x.classList.toggle('change')
}

const d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();

var overflowContainer = document.getElementById('testing');
overflowContainer.scrollTo((overflowContainer.offsetWidth / 2), 0);