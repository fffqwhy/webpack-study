// import icon from './js/iconfont.js';
import {sum} from './common/sum';
import {desum} from './common/desum';
import './css/index.css';
import './less/index.less';
import './sass/index.sass';
import './scss/index.scss';
import './stylus/index.styl';
import './css/iconfont.css';

// icon();
console.log(sum(1,10));
console.log(desum(2,1));

// 将js文件配置为动态更新
if(module.hot) {
    module.hot.accept("./common/sum");
    module.hot.accept("./common/desum");
}