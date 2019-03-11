---
category: Components
type: General
title: Aside
subtitle: 侧边栏
cols: 1
---

说啥？

## 何时使用

when you want to say 哈哈！

## API

Aside.props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 侧边栏的标题 | string, Node | |
| list | 菜单的数组 | AsideItem[] | [] |
| onClickMenuItem | 当点击菜单时的回调函数 | Function | noop |

AsideItem
list的每一条数据中的对象

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 菜单的唯一值 | string | |
| label | 菜单的中文名称 | string | |
| value | 每一条所携带的数据 | function | noop |
| icon | 图标的type | string | |
