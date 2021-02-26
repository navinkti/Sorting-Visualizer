var speed = document.getElementById("speed");
var disply = document.querySelector("#disply");
var size = document.querySelector("#size");
var generate = document.querySelector(".generate");
var sortingAlgos = document.querySelectorAll(".sortingAlgo button");
var defination = document.querySelector(".defination");
var algo = document.querySelector(".algo");
var arr = [];
var dis = [];
var margin_size;
var len = size.value;
var sp = speed.value;
var c_delay = 0;
var delay_time = 10000 / (Math.floor(len / 10) * sp); //Decrease numerator to increase speed.

var generateArray = () => {
  len = size.value;
  for (var i = 0; i < len; i++) {
    var tmp = Math.floor(Math.random() * (speed.max - speed.min) + 10);
    arr[i] = tmp;
  }

  disply.innerHTML = "";
  for (var i = 0; i < len; i++) {
    dis[i] = document.createElement("div");
    disply.appendChild(dis[i]);
    margin_size = 0.1;
    dis[i].style =
      " margin:0% " +
      margin_size +
      "%; background-color:#8338ec; width:" +
      (100 / len - 2 * margin_size) +
      "%; height:" +
      arr[i] +
      "%;";
  }
  delay_time = 10000 / (Math.floor(len / 10) * sp);
};

generate.addEventListener("click", generateArray);

speed.addEventListener("click", () => {
  sp = speed.value;
  delay_time = 10000 / (Math.floor(len / 10) * sp);
});

size.addEventListener("click", generateArray);

function div_update(cont, height, color) {
  window.setTimeout(function () {
    cont.style =
      " margin:0% " +
      margin_size +
      "%; width:" +
      (100 / len - 2 * margin_size) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (c_delay += delay_time));
}

for (var i = 0; i < sortingAlgos.length; i++) {
  sortingAlgos[i].addEventListener("click", runAlgo);
}

function runAlgo() {
  disableButton();

  switch (this.innerHTML) {
    case "Bubble":
      Bubble();
      defination.innerHTML = sorting.bubble.defination;
      algo.innerHTML =
        "<img src='./image/Bubble.png' width='100%' height='450px' alt=''>";
      break;
    case "Selection":
      Selection_sort();
      defination.innerHTML = sorting.selection.defination;
      algo.innerHTML =
        "<img src='./image/selection.png' width='100%' height='450px' alt=''>";
      break;
    case "Insertion":
      Insertion();
      defination.innerHTML = sorting.insertion.defination;
      algo.innerHTML =
        "<img src='./image/insertion.png' width='100%' height='450px' alt=''>";
      break;
    case "Merge":
      mergeSort();
      defination.innerHTML = sorting.merge.defination;
      algo.innerHTML =
        "<img src='./image/merge.png' width='100%' height='450px' alt=''>";
      break;
    case "Quick":
      Quick();
      defination.innerHTML = sorting.quick.defination;
      algo.innerHTML =
        "<img src='./image/quick.png' width='100%' height='450px' alt=''>";
      break;
    case "Heap":
      Heap();
      defination.innerHTML = sorting.heap.defination;
      algo.innerHTML =
        "<img src='./image/heap.png' width='100%' height='450px' alt=''>";
      break;
  }
}

generateArray();

function disableButton() {
  for (var i = 0; i < sortingAlgos.length; i++) {
    sortingAlgos[i].removeEventListener("click", runAlgo);
  }
  generate.removeEventListener("click", generateArray);
  speed.disabled = true;
  size.disabled = true;
}

function enableButton() {
  window.setTimeout(function () {
    for (var i = 0; i < sortingAlgos.length; i++) {
      sortingAlgos[i].addEventListener("click", runAlgo);
    }
    generate.addEventListener("click", generateArray);
    speed.disabled = false;
    size.disabled = false;
  }, (c_delay += delay_time));
}
