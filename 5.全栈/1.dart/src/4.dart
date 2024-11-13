// 注解
class Test {
  @Deprecated('Use turnOn instead')
  void activate() {
    turnOn();
  }

  //打开
  void turnOn() {}

  void run({required String name}) {
    print(name);
  }

  @Todo("todo....")
  void todo() {}
}

class Todo {
  final String info;
  const Todo(this.info);
}
