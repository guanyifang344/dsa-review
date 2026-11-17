# DSA 复习道场

面向 MCQ1 的数据结构与算法复习网站，覆盖 L01–L08，包含练习、模拟考、错题本、学习看板、课程复习和算法演示。

网站地址：https://guanyifang344.github.io/dsa-review/

## 本地预览

网站是无需安装依赖的静态页面。在此目录运行：

```sh
python3 -m http.server 8765
```

然后访问 `http://localhost:8765/`。

## 修改与发布

`index.html` 是可直接发布的完整网站，编辑源文件位于 `build/src/`。

修改源文件后，在此目录重新生成页面：

```sh
python3 build/bundle.py
```

提交并推送 `main` 分支后，GitHub Pages 会自动更新。Pages 的发布源为 `main` 分支根目录。

答题记录、错题、经验值和模拟考成绩保存在当前浏览器的本地存储中，不会上传到 GitHub。不同设备或浏览器的记录不会自动同步。
