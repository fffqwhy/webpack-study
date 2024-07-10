import React, { FunctionComponent } from "react";
import Todo from "./pages/home/todo";
import './app.less';
import TestTable from "./pages/home/table";
interface AppProps {

}

const App: FunctionComponent<AppProps> = () => {
    return (<div>
        <Todo />
        <TestTable />
    </div>);
}

export default App;