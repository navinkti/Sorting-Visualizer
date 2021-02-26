var Insertion = () => {
  c_delay = 0;

  for (var i = 0; i < len; i++) {
    div_update(dis[i], arr[i], "yellow"); //Color update
    var tmp = arr[i];
    var j = i - 1;
    while (j >= 0 && tmp < arr[j]) {
      div_update(dis[j], arr[j], "#ff0054"); //Color update
      div_update(dis[j + 1], arr[j + 1], "#ff0054"); //Color update
      arr[j + 1] = arr[j];

      div_update(dis[j], arr[j], "#ff0054"); //Color update
      div_update(dis[j + 1], arr[j + 1], "#ff0054"); //Color update
      if (i == j - 1)
        div_update(dis[i + 1], arr[i + 1], "yellow"); //Color update
      else;
      div_update(dis[j], arr[j], "#8338ec"); //Color update

      j = j - 1;
    }
    arr[j + 1] = tmp;

    for (var k = 0; k < i; k++) {
      div_update(dis[k], arr[k], "#5fad56"); //Color update
    }
  }
  div_update(dis[len - 1], arr[len - 1], "#5fad56"); //Color update
  enableButton();
};
