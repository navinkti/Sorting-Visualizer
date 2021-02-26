function mergeSort() {
  c_delay = 0;
  console.log(sp);
  merge_sort(0, len - 1);
  enableButton();
}

function merge(start, mid, end) {
  var p = start,
    q = mid + 1;

  var Arr = [],
    k = 0;
  for (var i = start; i <= end; i++) {
    if (p > mid) {
      Arr[k++] = arr[q++];
      div_update(dis[q - 1], arr[q - 1], "#ff0054"); //Color update
    } else if (q > end) {
      Arr[k++] = arr[p++];
      div_update(dis[p - 1], arr[p - 1], "#ff0054"); //Color update
    } else if (arr[p] < arr[q]) {
      Arr[k++] = arr[p++];
      div_update(dis[p - 1], arr[p - 1], "#ff0054"); //Color update
    } else {
      Arr[k++] = arr[q++];
      div_update(dis[q - 1], arr[q - 1], "#ff0054"); //Color update
    }
  }

  for (var t = 0; t < k; t++) {
    arr[start++] = Arr[t];

    div_update(dis[start - 1], arr[start - 1], "#5fad56"); //Color update
  }
}

function merge_sort(start, end) {
  if (start < end) {
    var mid = Math.floor((start + end) / 2);
    div_update(dis[mid], arr[mid], "yellow"); //Color update
    merge_sort(start, mid);
    merge_sort(mid + 1, end);

    merge(start, mid, end);
  }
}
