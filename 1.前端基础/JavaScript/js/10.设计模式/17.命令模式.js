// ### 3.17 命令模式 Command Pattern

var bindClick = function (button, func) {
  // button.onclick = func;
  func();
};

var MenuBar = {
  refresh: function () {
    console.log('刷新菜单界面');
  }
};
var SubMenu = {
  add: function () {
    console.log('增加子菜单');
  },
  del: function () {
    console.log('删除子菜单');
  }
};

let button1, button2, button3;

bindClick(button1, MenuBar.refresh);
bindClick(button2, SubMenu.add);
bindClick(button3, SubMenu.del);
