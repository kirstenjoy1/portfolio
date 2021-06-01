let itemOne = document.getElementById('about-me-container');

function increaseHeight(){
    itemOne.style.height = '500px';
  }
  itemOne.addEventListener('keydown', increaseHeight());