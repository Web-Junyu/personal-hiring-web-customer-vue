# 加入光荣的进化吧！

这是个人练习项目，本项目的目的是通过vue3来模拟携程客户端(求职者)，能力在此，唯有试错才有进步。

## 项目技术栈

- Vite 由于官方社区已经停止了vue-cli的维护，Vite又拥有强大的性能，因此选择Vite作为构建和打包工具
- TypeScript
- Vue3 组合式API 在工作中明显感觉到Vue3主推的组合式API的好处，另外由于组合式API继承了React的hook思想，可以在开发React时不具有巨大的不上手感
- Pinia pinia可以说是最好用的状态管理工具，可以通过getter和action进行显式获取和设置数据，也可以直接操作store内的数据进行修改(不建议，这样不符合coding的范式)
- vue-router
- Axios 封装请求方法
- antd-vue 作为个人最喜欢的前端UI框架，antd-vue封装了大部分可以满足实际需求的组件

## 项目准备

```bash
npm i
```
```bash
npm run dev
```