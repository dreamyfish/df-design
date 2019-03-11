---
title:
  zh-CN: 简单的侧边栏
  en-US: Type
---

## zh-CN

配置一个简单的菜单，传入3个参数，title, list, 和 onClickMenuItem

````jsx
import { Aside } from 'iloopd';

const list = [
  { key: '1', label: 'nav 1', icon: 'user', value: '1' },
  { key: '2', label: 'nav 2', icon: 'video-camera', value: '2' },
  { key: '3', label: 'nav 3', icon: 'upload', value: '3' },
  { key: '4', label: 'nav 4', icon: 'upload', value: '4' },
];

ReactDOM.render(
  <div>
    <Aside
      title="aside title"
      list={list}
      onClickMenuItem={(item) => {
        console.log('item', item);
      }}
    />
  </div>,
  mountNode);
````
