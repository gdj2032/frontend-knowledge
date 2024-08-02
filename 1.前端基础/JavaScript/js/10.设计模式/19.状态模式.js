// ### 3.19 状态模式 State Pattern

var delegate = function (client, delegation) {
  return {
    buttonWasPressed: function () {
      return delegation.buttonWasPressed.apply(client, arguments);
    }
  };
};

// 状态机
var FSM = {
  off: {
    buttonWasPressed: function () {
      console.log('关灯');
      this.button.innerHTML = '下一次按我是开灯';
      this.currState = this.onState;
    }
  },
  on: {
    buttonWasPressed: function () {
      console.log('开灯');
      this.button.innerHTML = '下一次按我是关灯';
      this.currState = this.offState;
    }
  }
};

var Light = function () {
  this.offState = delegate(this, FSM.off);
  this.onState = delegate(this, FSM.on);
  this.currState = this.offState; // 设置当前状态
  this.button = null;
};

Light.prototype.init = function () {
  var button = document.createElement('button');
  self = this;

  button.innerHTML = '已关灯';
  this.button = document.body.appendChild(button);
  this.button.onclick = function () {
    // 请求委托给FSM状态机
    self.currState.buttonWasPressed();
  };
};

var light = new Light();
light.init();
