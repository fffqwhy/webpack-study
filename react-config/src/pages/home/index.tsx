import React, { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (<div><Outlet /></div>);
}

export default Home;