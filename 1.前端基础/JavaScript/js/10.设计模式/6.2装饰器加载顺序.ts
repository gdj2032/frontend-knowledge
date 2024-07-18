function ClassDecorator() {
  return function (target) {
    console.log('I am class decorator');
  };
}
function MethodDecorator() {
  return function (target, methodName: string, descriptor: PropertyDescriptor) {
    console.log('I am method decorator');
  };
}
function Param1Decorator() {
  return function (target, methodName: string, paramIndex: number) {
    console.log('I am parameter1 decorator');
  };
}
function Param2Decorator() {
  return function (target, methodName: string, paramIndex: number) {
    console.log('I am parameter2 decorator');
  };
}
function PropertyDecorator() {
  return function (target, propertyName: string) {
    console.log('I am property decorator');
  };
}

@ClassDecorator()
class Hello {
  @PropertyDecorator()
  greeting: string;

  @MethodDecorator()
  greet(@Param1Decorator() p1: string, @Param2Decorator() p2: string) {}
}

// I am property decorator
// I am parameter2 decorator
// I am parameter1 decorator
// I am method decorator
// I am class decorator

// 1、有多个参数装饰器时：从最后一个参数依次向前执行
// 2、方法和方法参数中参数装饰器先执行。
// 3、类装饰器总是最后执行。
// 4、方法和属性装饰器，谁在前面谁先执行。因为参数属于方法一部分，所以参数会一直紧紧挨着方法执行。
