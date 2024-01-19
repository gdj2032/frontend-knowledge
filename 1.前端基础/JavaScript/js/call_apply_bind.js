/**
 * call、apply和bind
 * 都可以改变函数中的this指向。
 * this指向：
 * this指向：谁调用，指向谁（这是错误的！！！）
 * this永远指向最后一个调用它的那个对象
 */
let obj1 = {
  name: 'obj1',
  fn1(param) {
    console.log(this.name, param);
  }
}
let obj2 = {
  name: 'obj2',
  fn1(param) {
    console.log(this.name, param);
  }
}
// 一般调用
// call的第一参数为调用该函数的对象时，等价于一般调用
obj1.fn1('param1')
obj1.fn1.call(obj1, 'param1')
// 改变this指针，指向obj2
obj1.fn1.call(obj2, 'param1')
// apply的第二个参数为参数数组
obj1.fn1.apply(obj2, ['param1'])

// bind方法返回一个函数,但不会执行，这个函数的参数继承bind方法的参数
let fun = obj1.fn1.bind(obj2, 'param')
fun()
// 下面答案












// obj1 param1
// obj1 param1
// obj2 param1
// obj2 param1
// obj2 param
