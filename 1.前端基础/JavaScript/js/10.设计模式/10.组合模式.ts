// ### 3.10 组合模式 Composite Pattern
// 处理递归或分级数据结构 文件系统为例

interface Compose {
  name: string;
  add(file: CFile): void;
  scan(): void;
}

class CFolder implements Compose {
  name;
  files;
  constructor(name) {
    this.name = name;
    this.files = [];
  }

  add(file: CFile) {
    this.files.push(file);
  }

  scan() {
    console.info('--- scan this.files --->', this.files);
    for (let file of this.files) {
      file.scan();
    }
  }
}

class CFile implements Compose {
  name;
  constructor(name) {
    this.name = name;
  }

  add(file) {
    throw new Error('文件下面不能再添加文件');
  }

  scan() {
    console.log(`开始扫描文件：${this.name}`);
  }
}

let mainFolder = new CFolder('主目录');
let movieFolder = new CFolder('电影');
let musicFolder = new CFolder('音乐');

let file1 = new CFile('钢铁侠.mp4');
let file2 = new CFile('再谈记忆.mp3');
movieFolder.add(file1);
musicFolder.add(file2);
mainFolder.add(movieFolder);
mainFolder.add(musicFolder);
mainFolder.scan();

// CFolder 与 CFile 接口保持一致。执行 scan() 时，若发现是树对象，则继续遍历其下的叶对象，执行 scan()。

// 开始扫描文件：钢铁侠.mp4
// 开始扫描文件：再谈记忆.mp3
