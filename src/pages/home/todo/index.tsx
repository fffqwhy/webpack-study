import React, { FunctionComponent } from "react";

import cssStyles from './css/index.module.css';
import scssModule from './sass/index.module.scss';
import lessModule from './less/index.module.less';

interface TodoProps {

}

const Todo: FunctionComponent<TodoProps> = () => {
    return (<div>
        <div className={cssStyles.content}>这是css</div>
        <div className={scssModule["scssContent"]}>这是scss</div>
        <div className={lessModule["lessContent"]}>这是less</div>
    </div>);
}

export default Todo;