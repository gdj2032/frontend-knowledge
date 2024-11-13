import 'dart:math';

import 'util.dart';

void main() {
  var p = Point(2, 2);
  Log([p.x, p.y]);

  Test3.test1(1, 2);
  // 6. 实例化可以省略new关键字
  A(1, 2, 3);

  var list = [3, 4];
  Test4(list);
  Test5(2, 3);
  Log([Test6.test6.a, Test6.test6.b]);
}

// 4. 命名构造函数
// 5. 调用非默认超类构造函数
class Test1 {
  final num a;
  final num b;

  Test1(this.a, this.b);
  // Test1({required this.a, required this.b}); ✅
  // Test1({required this.a}); ❌
  // Test1(); ❌
}

class Test2 {
  late num a;
  late num b;

  //构造函数可以没有方法体，并且this可以直接在传参时直接对实例赋值
  Test2(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Test3 {
  final num a;
  final num b;
  Test3.test1(this.a, this.b);
  Test3.test2(this.a, this.b);
}

class TestA {
  final num a;
  final num b;
  TestA(this.a, this.b) {
    print("class:TestA");
  }
}

class A extends TestA {
  final num a;
  final num b;
  final num c;
  A(this.a, this.b, this.c) : super(a, b) {
    print('class:A');
  }
}

// 7. 初始化程序列表
class Test4 {
  num a;
  num b;
  Test4(List list)
      : a = list[0],
        b = list[1] {
    Log([a, b]);
  }
}

// 8. 重定向构造函数
class Test5 {
  num a, b;
  Test5(this.a, this.b) {
    Log([a, b]);
  }
  // 重定向构造函数不能带花括号和内容，
  Test5.alongXAxis(num c) : this(c, 0);
}

// 9. 常量构造函数
class Test6 {
  static final Test6 test6 = const Test6(3, 4);
  final num a, b;
  const Test6(this.a, this.b);
}
