import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Servicos from "./pages/Servicos";
import ListarServicos from "./pages/ListarServicos";
import ListarClientes from "./pages/ListarClientes";
import Clientes from "./pages/Clientes";

export default function routes() {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/servicos" exact component={Servicos} />
                <Route path="/listarservicos" exact component={ListarServicos} />
                <Route path="/clientes" exact component={Clientes} />
                <Route path="/listarclientes" exact component={ListarClientes} />
            </Switch>
        </Router>
    );
}