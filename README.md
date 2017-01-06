# react-redux

![redux流程图](img/redux.jpg)

## Redux 的适用场景：多交互、多数据源。
## Redux 设计思想
- [x] Web 应用是一个状态机，视图与状态是一一对应的。
- [x] 所有的状态，保存在一个对象里面。

> * 某个组件的状态，需要共享
> * 某个状态需要在任何地方都可以拿到
> * 一个组件需要改变全局状态
> * 一个组件需要改变另一个组件的状态

计数器例子解析：

- [ ] 用户发出action (store.dispatch({type:"XXXX"}))
- [ ] store 自动调用reducer,传入两个参数,当前的state和收到的action,reducer会返回新的state
- [ ] state一旦变化,store就会调用监听函数subscribe,重新渲染DOM
- [ ] 重新渲染DOM的时候,通过store.getState()获取当前的state

