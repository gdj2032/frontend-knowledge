// ### 3.18 备忘录模式 Memento Pattern

//  Originator 类，负责创建和管理一个备忘录对象
function Originator() {
  this.state = null;
}

Originator.prototype.createMemento = function () {
  // 创建备忘录对象，并将当前状态存储起来
  return new Memento(this.state);
};

Originator.prototype.setState = function (state) {
  this.state = state;
};

Originator.prototype.getState = function () {
  return this.state;
};

//  Memento 类，用于存储 Originator 对象的状态
function Memento(state) {
  this.state = state;
}

//  Caretaker 类，负责保存备忘录对象，不应该对备忘录的内容进行操作或检查
function Caretaker() {
  this.mementos = [];
}

Caretaker.prototype.add = function (memento) {
  this.mementos.push(memento);
};

Caretaker.prototype.get = function (index) {
  if (index < 0 || index >= this.mementos.length) {
    return null;
  }
  return this.mementos[index];
};

// 使用示例
var originator = new Originator();
originator.setState('State #1');
console.log(originator.getState()); // 输出: State #1

var memento = originator.createMemento();
var caretaker = new Caretaker();
caretaker.add(memento);

originator.setState('State #2');
console.log(originator.getState()); // 输出: State #2

originator.setState(caretaker.get(0).state);
console.log(originator.getState()); // 输出: State #1，恢复到初始状态

// Originator类负责保存对象的状态，Memento类负责保存状态，而Caretaker类负责保存多个备忘录对象，不应该对备忘录的内容进行操作或检查。
// 通过createMemento方法创建备忘录，并通过Caretaker对象来管理这些备忘录。当需要恢复状态时，可以从Caretaker获取对应的备忘录，并将状态恢复
