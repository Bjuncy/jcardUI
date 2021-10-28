# jcard-ui 组件库

### 快速开始

#### 1.安装组件库

```bash
npm i jcard-ui
```
#### 2.引用组件库
```javascript
// 全局引入
import 'jcard-ui/dist/css/index.css';
import JUI from 'jcard-ui';
Vue.use(JUI);

//按需引入
import 'jcard-ui/dist/css/card.css';
import { Card } from 'jcard-ui';
Vue.use(Card);
```