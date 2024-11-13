void Log(List<dynamic> elements, [bool newline = false]) {
  if (elements.length == 0) return;
  var str = "";
  for (var i = 0; i < elements.length; i++) {
    str += "$i: ${elements[i]}";
    if (i < elements.length - 1) {
      str += newline ? "\n" : ",";
    }
  }
  print(str);
}
