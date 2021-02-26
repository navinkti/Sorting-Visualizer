var Selection_sort = () => {
  c_delay = 0;

  for (var i = 0; i < len; i++) {
    div_update(dis[i], arr[i], "#ff0054");
    var minimum = i;
    for (var j = i + 1; j < len; j++) {
      div_update(dis[j], arr[j], "yellow");
      if (arr[minimum] > arr[j]) {
        if (minimum != i) {
          div_update(dis[minimum], arr[minimum], "#8338ec");
        }
        minimum = j;
        div_update(dis[minimum], arr[minimum], "#ff0054");
      } else div_update(dis[j], arr[j], "#8338ec");
    }
    if (minimum != i) {
      var temp = arr[i];
      arr[i] = arr[minimum];
      arr[minimum] = temp;
      div_update(dis[minimum], arr[minimum], "#ff0054");
      div_update(dis[i], arr[i], "#ff0054");
      div_update(dis[minimum], arr[minimum], "#8338ec");
    }
    div_update(dis[i], arr[i], "#5fad56");
  }
  div_update(dis[i], arr[i], "#5fad56");
  enableButton();
};
