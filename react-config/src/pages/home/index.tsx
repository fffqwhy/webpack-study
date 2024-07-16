import React, { FunctionComponent, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {

    const [theme, setTheme] = useState(localStorage.getItem("themeData")||"light");

    const toggleTheme: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.checked) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };
    useEffect(() => {
        if (theme === "light") {
            document.querySelector("body")?.setAttribute("data-theme", "light");
        }
        else {
            document.querySelector("body")?.setAttribute("data-theme", "theme-dark");
        }
        localStorage.setItem("themeData", theme)
    }, [theme])
    return (<div>
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
                {["todo", "onePage"].map(item => <div key={item} style={{ margin: "4px 12px", border: "1px solid gray", padding: "6px 7px" }}><Link to={item}>{item}</Link></div>)}
            </div>
            <div style={{ marginRight: "24px" }}>
                白色主题：<input type="checkbox" onChange={toggleTheme} checked={theme === "light"} />
            </div>
        </header>
        <Outlet />
    </div>);
}

export default Home;
