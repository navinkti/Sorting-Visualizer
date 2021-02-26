function Bubble() {
  c_delay = 0;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      div_update(dis[j], arr[j], "yellow"); //Color update

      if (arr[j] > arr[j + 1]) {
        div_update(dis[j], arr[j], "#ff0054"); //Color update
        div_update(dis[j + 1], arr[j + 1], "#ff0054"); //Color update

        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        div_update(dis[j], arr[j], "#ff0054"); //Height update
        div_update(dis[j + 1], arr[j + 1], "#ff0054"); //Height update
      }
      div_update(dis[j], arr[j], "#8338ec"); //Color updat
    }
    div_update(dis[j], arr[j], "#5fad56"); //Color update
  }
  
  div_update(dis[0], arr[0], "#5fad56"); //Color update

  enableButton();
}
