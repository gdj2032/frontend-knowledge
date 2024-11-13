import 'util.dart';

late var g;

void main() {
  var a = 111, b = '222';
  String c = "333";
  int d = 444;
  double e = 555.0;
  print({a, b, c, d, e});

  String f = """
  123
  123
  """;

  String i = "aaa $a bbb $b ccc";

  final ft = new DateTime.now();
  // const ct = new DateTime.now(); // 报错

  final nickname1 = 'Bob'; // Without a type annotation
  final String nickname2 = 'Bobby';

  String name;
  name = "1";
  // name = null; 报错
  String? name2;
  name2 = null;
  name2 = "2";
  print(name is int);

  g = 123;

  final arr1 = [];
  arr1.add(1);
  print(arr1);
  const arr2 = [];
  // arr2.add(2); error

  assert(1 + 1 == 2, "223333");

  dynamic data = '22222';

  print(data as String);

  // List
  var l1;
  var l2 = [1];
  var l3 = [...l2, ...?l1]; // ...? // 避免null扩展
  var l4 = <String>["1", "2"];
  var l5 = new List.empty(growable: true); // 不限制长度的空列表
  var l6 = List.filled(3, 0); // 固定长度为3 填充0 超出报错

  // Set
  var i1 = {1, 2, 3, 4, 5};
  var i2 = <String>{"1", "2"};
  Set i3 = new Set();
  Set<int> i4 = new Set();
  i4.addAll({1, 3, 5, 6, 7});
  // print(i1[0]); // error 不能通过下标取值
  var i5 = i1.intersection(i4); // 交集
  var i6 = i1.union(i4); // 并集
  var i7 = i1.difference(i4); // 差集 i1中i4的补集 i1 - i4
  print({i5, i6, i7}); // {{1, 3, 5}, {1, 2, 3, 4, 5, 6, 7}, {2, 4}}

  // Map
  var m1 = {'a': 1, 'b': 2};
  Map m2 = new Map();
  m2['c'] = 3;
  m2['d'] = 4;
  m2[{1}] = 5;
  m2[{2}] = 6;
  Log([m1, m2]);

  // Records
  var r = ('aaa', a: 123, 'bbb', b: 124);
  Log([r.a, r.b, r.$1, r.$2]);

  ({int a, bool b}) temp = (a: 0, b: true);

  // Runes
  var clapping = '\u{1f44f}';
  print(clapping); // 👏
  print(clapping.codeUnits); // [55357, 56399]
  print(clapping.runes.toList()); // [128079]
  Runes runes = new Runes('\u2665, \u{1f605}, \u{1f60e}');
  print(runes); // (9829, 44, 32, 128517, 44, 32, 128526)
  print(new String.fromCharCodes(runes)); // ♥, 😅, 😎

  // Symbols
  var sym1 = Symbol('name1');
  print(sym1); // Symbol("name1")
  var sym2 = #name2;
  print(sym2); // Symbol("name2")

  // Generics
  // 变量泛型
  var g1 = <int>[1];
  g1.addAll([2, 3]);
  // g1.add("1"); // error
  var g2 = <String>{'111', '222'};
  var g3 = <String, String>{"a": "a", "b": "b"};

  var x1 = {
    "user": ["jack", 11]
  };
  var {"user": [x1Name, x1Age]} = x1;
  Log([x1["u"]]);

  add4(1, y: 2);
}

// 类泛型
abstract class Cache<T> {
  T getByKey(String key);
  void setByKey(String key, T value);
}

class CacheTest<T> extends Cache<T> {
  Map map = new Map();

  @override
  T getByKey(String key) {
    return map[key];
  }

  @override
  void setByKey(String key, T value) {
    map[key] = value;
  }
}

// 函数泛型
T getCacheFirst<T>(List<T> list) {
  return list[0];
}

// 别名
typedef IntList = List<int>;
IntList il = [1, 2, 3];

typedef ListMap<X> = Map<X, List<X>>;

typedef Compare<T> = int Function(int a, int b);
int sort(int a, int b) => a - b;

void typedefTest() {
  assert(sort(1, 2) is Compare<int>); // true
}

// 函数
int add(int x, [int? y, int? z]) {
  return x + y! + z!;
}

int add2(int x, [int y = 1, int z = 1]) {
  return x + y + z;
}

int add4(int x, {int y = 1, int z = 1}) {
  return x + y + z;
}
