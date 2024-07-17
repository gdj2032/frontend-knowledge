// ### 3.7 代理模式 Proxy Pattern

interface IPerson {
  eat: () => void;
}

class Student implements IPerson {
  name: string
  constructor(name: string) {
    this.name = name
  }
  eat() {
    console.info(`--- ${this.name}学生吃了 --->`);
  }
}

class ProxyStu implements IPerson {
  private stu: Student;
  constructor(stu: Student) {
    this.stu = stu;
  }
  eat() {
    console.info('--- 开始 --->');
    this.stu.eat()
    console.info('--- 结束 --->');
  }
}

function main() {
  const stu = new Student("ggg");
  const proxyStu = new ProxyStu(stu);
  // 通过代理访问目标对象
  proxyStu.eat();
}

main()