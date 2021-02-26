function Heap() {
  c_delay = 0;
  heap_sort();
  enableButton();
}

function swap(i, j) {
  div_update(dis[i], arr[i], "#ff0054"); //Color update
  div_update(dis[j], arr[j], "#ff0054"); //Color update

  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  div_update(dis[i], arr[i], "#ff0054"); //Height update
  div_update(dis[j], arr[j], "#ff0054"); //Height update

  div_update(dis[i], arr[i], "#8338ec"); //Color update
  div_update(dis[j], arr[j], "#8338ec"); //Color update
}

function max_heapify(n, i) {
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) {
    if (largest != i) {
      div_update(dis[largest], arr[largest], "#8338ec"); //Color update
    }

    largest = l;

    div_update(dis[largest], arr[largest], "#ff0054"); //Color update
  }

  if (r < n && arr[r] > arr[largest]) {
    if (largest != i) {
      div_update(dis[largest], arr[largest], "#8338ec"); //Color update
    }

    largest = r;

    div_update(dis[largest], arr[largest], "#ff0054"); //Color update
  }

  if (largest != i) {
    swap(i, largest);

    max_heapify(n, largest);
  }
}

function heap_sort() {
  for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
    max_heapify(len, i);
  }

  for (var i = len - 1; i > 0; i--) {
    swap(0, i);
    div_update(dis[i], arr[i], "#5fad56"); //Color update
    div_update(dis[i], arr[i], "yellow"); //Color update

    max_heapify(i, 0);

    div_update(dis[i], arr[i], "#8338ec"); //Color update
    div_update(dis[i], arr[i], "#5fad56"); //Color update
  }
  div_update(dis[i], arr[i], "#5fad56"); //Color update
}
