import React, { FunctionComponent } from "react";
import { RouterProvider } from "react-router-dom";

import './app.less';
import router from "./route";
interface AppProps {

}

const App: FunctionComponent<AppProps> = () => {
    return (<RouterProvider router={router} />);
}

export default App;