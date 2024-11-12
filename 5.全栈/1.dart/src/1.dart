import 'dart:ffi';

void main() {
  var a = 111, b = '222';
  String c = "333";
  int d = 444;
  double e = 555.0;
  print({a, b, c, d, e});

  final ft = new DateTime.now();
  // const ct = new DateTime.now(); // 报错
}
