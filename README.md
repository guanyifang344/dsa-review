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

答题明细、错题和模拟考成绩保存在当前浏览器。昵称和累计经验值同步至公开排行榜，匿名设备密钥保存在当前浏览器。不同设备或浏览器的记录不会自动同步。

## 访问统计

网站已接入独立的 Google Analytics 4 资源「DSA 复习道场」。

- [实时人数看板](https://analytics.google.com/analytics/web/#/a415703526p564789803/realtime/overview)
- [统计首页](https://analytics.google.com/analytics/web/#/a415703526p564789803/reports/intelligenthome)
- 媒体资源 ID：`564789803`
- 衡量 ID：`G-QN2CVEXD93`
- Google 代码：`GTM-T89HXRCQ`
- 报告时区：中国时间（UTC+8）

查看看板需要登录拥有此资源权限的 Google 账号。统计包含访问人数、来源和设备等基础数据，不包含浏览器内的具体答题记录、错题或成绩。新数据从统计代码上线后开始收集。
