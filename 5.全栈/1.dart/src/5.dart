// import 'demo.dart' show demo;
// import 'test/index.dart' show a_func, b_func;
import 'demo.dart';
import 'demo.dart' as demo2;
import 'test/index.dart';

void main() {
  // 文件导入导出
  a_func();
  b_func();
  demo();
  demo2.demo();
}
