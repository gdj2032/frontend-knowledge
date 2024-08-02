// ### 3.21 中介者模式 Mediator Pattern

// 接受中介者对象作为参数，以便它们可以访问中介者对象。然后，在中介者对象中定义一个方法，用于注册和移除同事对象。
// 这个方法会维护一个同事对象列表。接下来，在中介者对象中定义一个方法，用于处理同事对象的交互，以便它们可以通过中介者对象相互通信。

// demo1

class Mediator {
  constructor() {
    this.colleagues = [];
  }

  register(colleague) {
    if (!this.colleagues.includes(colleague)) {
      this.colleagues.push(colleague);
      colleague.setMediator(this);
    }
  }

  unregister(colleague) {
    const index = this.colleagues.indexOf(colleague);
    if (index !== -1) {
      this.colleagues.splice(index, 1);
      colleague.setMediator(null);
    }
  }

  notify(sender, event) {
    this.colleagues.forEach(colleague => {
      if (colleague !== sender) {
        colleague.receiveEvent(event);
      }
    });
  }
}

class Colleague {
  constructor() {
    this.mediator = null;
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }

  sendEvent(event) {
    this.mediator.notify(this, event);
  }

  receiveEvent(event) {
    console.log(`${this.constructor.name} received event: ${event}`);
  }
}

class ConcreteColleagueA extends Colleague {
  constructor() {
    super();
  }

  sendSomeEvent() {
    console.log(`${this.constructor.name} sent event`);
    this.sendEvent('some event');
  }
}

class ConcreteColleagueB extends Colleague {
  constructor() {
    super();
  }

  receiveEvent(event) {
    if (event === 'some event') {
      console.log(`${this.constructor.name} received some event`);
    } else {
      super.receiveEvent(event);
    }
  }
}

const mediator = new Mediator();
const colleagueA = new ConcreteColleagueA();
const colleagueB = new ConcreteColleagueB();

mediator.register(colleagueA);
mediator.register(colleagueB);

colleagueA.sendSomeEvent(); // Output: ConcreteColleagueA sent event, ConcreteColleagueB received some event

mediator.unregister(colleagueB);

colleagueA.sendSomeEvent(); // Output: ConcreteColleagueA sent event

// demo2

const player = function (name) {
  this.name = name;
  playerMiddle.add(name);
};

player.prototype.win = function () {
  playerMiddle.win(this.name);
};

player.prototype.lose = function () {
  playerMiddle.lose(this.name);
};

const playerMiddle = (function () {
  // 将就用下这个 demo，这个函数当成中介者
  const players = [];
  const winArr = [];
  const loseArr = [];
  return {
    add: function (name) {
      players.push(name);
    },
    win: function (name) {
      winArr.push(name);
      if (winArr.length + loseArr.length === players.length) {
        this.show();
      }
    },
    lose: function (name) {
      loseArr.push(name);
      if (winArr.length + loseArr.length === players.length) {
        this.show();
      }
    },
    show: function () {
      for (let winner of winArr) {
        console.log(winner + '挑战成功;');
      }
      for (let loser of loseArr) {
        console.log(loser + '挑战失败;');
      }
    }
  };
})();

const a = new player('A 选手');
const b = new player('B 选手');
const c = new player('C 选手');

a.win();
b.win();
c.lose();

// A 选手挑战成功;
// B 选手挑战成功;
// C 选手挑战失败;
