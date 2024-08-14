import {Component} from "react";
import Home from "../pages/Home";
import {Routes,Route, Navigate} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

class AppRouter extends Component { 
    render() {
        return (
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/login"} element={<Login/>}></Route>
                <Route path={"/register"} element={<Register/>}></Route>
                <Route path={"/logout"} element={<Logout/>}></Route>
                <Route path={"*"} element={<Navigate to={"/"} />}></Route>
            </Routes>
        );
    }
}

export default AppRouter;