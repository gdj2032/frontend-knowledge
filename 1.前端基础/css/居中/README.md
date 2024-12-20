# 居中

参考代码: [css/居中/center.html](./center.html)

### 被居中元素宽高固定

1. 绝对定位，top 和 left 为 50%， margin 的 left 和 top 为自身宽高一半

2. 绝对定位，top 和 left 为父元素一半剪自身一半

### 被居中元素宽高不定

3. 使用 CSS3 的 `transform`将位置在中心点平移自身宽高一半

4. 使用 flex 布局居中

5. flex 布局，父元素指定子元素居中。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>垂直居中</title>
</head>

<style>
  .container-center {
    position: relative;
    width: 400px;
    height: 400px;
    background-color: #6af2e2;
  }

  .center-normal {
    width: 100px;
    height: 50px;
    background-color: #fff;
  }

  .center1 {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -25px;
  }

  .center2 {
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 50px);
    background-color: #863232;
    opacity: 0.5;
  }

  .center3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .container-center-flex {
    display: flex;
  }

  .center4 {
    margin: auto;
  }

  .container-center-flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .center5 {}
</style>

<body>

  <div>
    <h1>一. 被居中元素宽高固定</h1>
    <h2>1. center1 绝对定位，top 和 left 为 50%， margin 的 left 和 top 为自身宽高一半</h2>
    <h2>2. center2 绝对定位，top 和 left 为父元素一半剪自身一半</h2>
    <div class="container-center">
      <div class="center1 center-normal">center1</div>
      <div class="center2 center-normal">center2</div>
    </div>
  </div>

  <div>
    <h1>二. 被居中元素宽高不定</h1>
    <h2>3. center3 使用 CSS3 的 `transform`将位置在中心点平移自身宽高一半</h2>
    <div class="container-center">
      <div class="center3 center-normal">center3</div>
    </div>
    <h2>4. center4 使用 flex 布局居中</h2>
    <div class="container-center container-center-flex">
      <div class="center4 center-normal">center4</div>
    </div>

    <h2>5. center5 flex 布局，父元素指定子元素居中。 </h2>
    <div class="container-center container-center-flex-center">
      <div class="center5 center-normal">center5</div>
    </div>
  </div>
</body>

</html>
```

#### 在浏览器窗口中居中

基于视口的垂直居中。不要求原生有固定的宽高，但是这种居中是在整个页面窗口内居中，不是基于父元素

```css
.center {
  margin: 50vh auto;
  transform: translateY(-50%);
}
```
