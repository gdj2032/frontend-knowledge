# grid网格布局

将属性 display 值设为 grid 或 inline-grid 就创建了一个网格容器，所有容器直接子结点自动成为网格项目。

参考代码: [grid网格布局](./grid.html)

## 1.display: grid;

网格项目按行排列，网格项目占用整个容器的宽度。

## 2.display: inline-grid;

网格项目按行排列，网格项目宽度由自身宽度决定。

## 3.网格

属性 `grid-template-row` 和 `grid-template-columns` 用于显示定义网格，分别用于定义行轨道和列轨道。

### 3.1 px定义

```css
.container3 {
  display: grid;
  grid-template-columns: 90px 190px 290px;
}
```

参数 `grid-template-columns: 90px 190px 290px;` 表示 第123列的宽度

### 3.2 fr定义

```css
.container4 {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
}
```

`fr` 用于表示轨道尺寸配额，表示按配额比例分配可用空间。

参数 `grid-template-columns: 1fr 1fr 2fr;` 表示1:1:2的宽度占据

### 3.3 混合定义
```css
.container5 {
  display: grid;
  grid-template-columns: 100px 25% 1fr;
}
```

单位fr和其它长度单位混合使用时，fr的计算基于其它单位分配后的剩余空间。

本例中，1fr = (容器宽度 - 100px - 容器宽度的25%)

## 4.轨道的最小最大尺寸设置

函数 `minmax()` 用于定义轨道最小/最大边界值。

```css
.container6 {
  display: grid;
  grid-template-columns: minmax(auto, 50%) 1fr 300px;
}
```

函数minmax()接收两个参数：第一个参数表示最小轨道尺寸，第二个参数表示最大轨道尺寸。长度值可以是auto，表示轨道尺寸可以根据内容大小进行伸长或收缩。

## 5.重复的网格轨道

函数repeat()用来定义重复的网格轨道，尤其适用于有多个相同项目的情况下。

### 5.1.repeat()默认使用

```css
.container7 {
  display: grid;
  grid-template-rows: repeat(4, 100px);
  grid-template-columns: repeat(3, 1fr);
}
```

函数repeat()接收两个参数：第一个参数表示重复的次数，第二个参数表示轨道尺寸。

### 5.2.函数repeat()可以用在轨道定义列表当中。

```css
.container8 {
  display: grid;
  grid-template-columns: 100px repeat(2, 1fr) 100px;
}
```

第1和第4列宽为100px; 函数repeat()创建了中间2列，每一列宽度都是1fr。

## 6.定义网格间隙

属性 `grid-column-gap` 和 `grid-row-gap` 用于定义网格间隙。

网格间隙只创建在行列之间，项目与边界之间无间隙。

间隙尺寸可以是任何非负的长度值（px，%，em等）。

属性 `grid-gap` 是 `grid-column-gap` 和 `grid-row-gap` 的简写形式。

### 6.1.分开间隙
```css
.container9 {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 40px;
}
```

### 6.2.grid-gap

如只有一个值，则其即表示行间隙，也表示列间隙。

```css
.container9 {
  display: grid;
  grid-gap: 20px;
}
```