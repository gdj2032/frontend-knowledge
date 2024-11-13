import '../util.dart';

void a_func() {
  print("a_func");
}

class Test_A {
  late int _a;
  Test_A(this._a);

  get getA {
    return this._a;
  }

  get getRun {
    return this._run();
  }

  String _run() {
    Log(["_run func"]);
    return "run";
  }
}
