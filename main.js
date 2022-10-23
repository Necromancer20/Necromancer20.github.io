
var number = 0;

function addOne(){
    number++;
  const text = document.getElementById("count");

  text.innerText = number.toString();

  text.style.color = ['blue', 'green', 'white'][Math.floor(Math.random() * 3)];

};
