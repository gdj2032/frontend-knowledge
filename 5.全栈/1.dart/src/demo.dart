void main() {
  List l = [];
  l.add(1);
  print(l.length);
  l.add(2);
  l.remove(1);
  print(l.length);

  var i = 1;

  print(i++);

  print(changeLines(
      ["", "", "123", "", "", "", "111", "", "222", "", "333", "", "", ""]));
}

void demo() {}

List<dynamic> changeLines(List<dynamic> lines) {
  List<dynamic> newLines = [];
  List<dynamic> countArr = [];
  for (var i = 0; i < lines.length - 1; i++) {
    var item1 = lines[i];
    var item2 = lines[i + 1];
    if (item1 == item2 && item1 == "") {
      countArr.add(item1);
    } else if (item1 == "") {
      countArr.add(item1);
      countArr.removeLast();
      print("countArr: $countArr");
      newLines.addAll(countArr);
      countArr = [];
    } else {
      newLines.add(item1);
    }
    // 处理最后一个元素的情况
    if (i == lines.length - 2) {
      if (item1 == item2 && item2 == "") {
        countArr.add(item2);
      }
      if (countArr.length >= 2) {
        countArr.removeLast();
        newLines.addAll(countArr);
      } else if (item1 == "\n") {
        // 省略最后一个
      }
    }
  }
  return newLines;
}
