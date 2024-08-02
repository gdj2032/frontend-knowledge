// ### 3.22 解释器模式 Interpreter Pattern

// 如何使用JavaScript解释器模式解析和执行一个数学表达式

// 定义语法规则
const expression = '1 + 2 * 3';

// 解析语法规则
const parseExpression = expression => {
  const tokens = expression.split(' ');
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (/\d+/.test(token)) {
      stack.push(parseInt(token));
    } else if (/[+\-*\/]/.test(token)) {
      const b = stack.pop();
      const a = stack.pop();

      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(a / b);
          break;
      }
    }
  }

  return stack.pop();
};

// 执行可执行对象
const result = parseExpression(expression);

console.log(result); // 7
