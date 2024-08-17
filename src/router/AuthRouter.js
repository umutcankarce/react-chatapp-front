import {Component} from "react";
import Home from "../pages/Home";
import Message from "../pages/Message";
import {Routes,Route, Navigate} from "react-router-dom";
import Logout from "../pages/Logout";
import { inject, observer } from "mobx-react";
import withRouter from "../withRouter";

class AuthRouter extends Component { 

    constructor(props){
        super(props);
    }

    render() {
        
        return (
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/message/:id"} element={<Message/>}></Route>
                <Route path={"/logout"} element={<Logout/>}></Route>  
                <Route path={"*"} element={<Navigate to={"/"} />}></Route>
            </Routes>
        );
    }
}

export default withRouter(inject("AuthStore")(observer(AuthRouter)));