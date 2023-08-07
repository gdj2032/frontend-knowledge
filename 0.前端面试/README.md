# 重点内容(简要)

## html

1. 浏览器渲染过程
3. 输入网址到实现的过程
4. html语义化的理解
5. ISO7层交换模型(5层)
6. document.write 和 innerHTML 的区别
7. 图片懒加载的原理
8. svg和canvas的区别
9. iframe的优缺点
10. href与src
11. 跨域的解决方法
12. 登录鉴权
13. 页面卡顿原因
14. 项目优化
15. 项目性能监测
16. bom, dom, dom事件流
17. 网页前端性能优化
18. 进程和线程
19. 移动端性能优化
20. axios和fetch
21. css工程化
22. ajax
23. 浏览器缓存
24. cookie, sessionStorage, localStorage
25. 网页布局
26. html的async和deffer
27. 重绘和回流

## webpack

1. 配置说明
2. loader
3. plugin
4. loader和plugin的区别
5. 文件指纹
6. babel原理
7. webpack事件机制
8. source map
9. tree shaking
10. HMR
11. 模块打包原理
12. 文件监听原理
13. bundle体积进行监控和分析
14. 在实际工程中，配置文件上百行乃是常事，如何保证各个loader按照预想方式工作
15. 如何优化 webpack 的构建速度
16. webpack为什么要进行代码分割
17. webpack构建流程
18. webpack工作原理
19. webpack减小项目体积
20. webpack怎么优化开发环境
21. 如何优化 webpack 的构建速度
22. 模块联邦


<!-- <details>
<summary>1. 配置说明</summary>
<pre>
<code>
运行在nodejs环境下,配置文件webpack.config.js,遵循commonjs规范,最终export出json对象
1.entry 入口文件配置
2.output 输出文件配置
3.module 解析文件规则
4.plugins 插件
5.resolve 别名, 定义寻找模块规则
6.devServer 开发配置
</code>
</pre>
</details>

<details>
<summary>2. loader</summary>
<pre>
<code>
解析非原生js的代码和文件
1. ts-loader 解析ts文件
2. file-loader 处理图片和字体
3. url-loader 处理图片和字体(用户设置阈值,小于阈值生成base64形式编码,大于阈值交给file-loader处理)
4. image-loader 加载和压缩图片
5. json-loader 加载json文件
6. babel-loader es6 转换成 es5
7. css-loader 加载css, 模块化 压缩 文件导入等

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
         use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'sass-loader' },
        ],
      }
    ]
  }
}
```
</code>
</pre>
</details>

<details>
<summary>3.plugins</summary>
<pre>
<code>

</code>
</pre>
</details>

<details>
<summary>demo</summary>
<pre>
<code>
demo
</code>
</pre>
</details> -->
