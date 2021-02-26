function Quick() {
  c_delay = 0;
  quick_sort(0, len - 1);
  enableButton();
}

function quick_partition(start, end) {
  var i = start + 1;
  var piv = arr[start]; //make the first element as pivot element.
  div_update(dis[start], arr[start], "yellow"); //Color update

  for (var j = start + 1; j <= end; j++) {
    //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
    if (arr[j] < piv) {
      div_update(dis[j], arr[j], "yellow"); //Color update

      div_update(dis[i], arr[i], "#ff0054"); //Color update
      div_update(dis[j], arr[j], "#ff0054"); //Color update

      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      div_update(dis[i], arr[i], "#ff0054"); //Height update
      div_update(dis[j], arr[j], "#ff0054"); //Height update

      div_update(dis[i], arr[i], "#8338ec"); //Height update
      div_update(dis[j], arr[j], "#8338ec"); //Height update

      i += 1;
    }
  }
  div_update(dis[start], arr[start], "#ff0054"); //Color update
  div_update(dis[i - 1], arr[i - 1], "#ff0054"); //Color update

  var temp = arr[start]; //put the pivot element in its proper place.
  arr[start] = arr[i - 1];
  arr[i - 1] = temp;

  div_update(dis[start], arr[start], "#ff0054"); //Height update
  div_update(dis[i - 1], arr[i - 1], "#ff0054"); //Height update

  for (var t = start; t <= i; t++) {
    div_update(dis[t], arr[t], "#5fad56"); //Color update
  }

  return i - 1; //return the position of the pivot
}

function quick_sort(start, end) {
  if (start < end) {
    //stores the position of pivot element
    var piv_pos = quick_partition(start, end);
    quick_sort(start, piv_pos - 1); //sorts the left side of pivot.
    quick_sort(piv_pos + 1, end); //sorts the right side of pivot.
  }
}
