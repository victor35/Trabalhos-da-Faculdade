import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from 'react';
import React from 'react';
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
       
            <fieldset style={{ marginTop: "10%", height: "300px", width: "300px", marginLeft: "40%" }}>
                <div className="p-text-center">Gestão de Serviços</div>
                <br /> <br />
                <label>Email:</label>
                <InputText value={email} onChange={(e) => setEmail(e.target.value)} />
                <br /> <br />
                <label>Senha:</label>
                <InputText value={senha} onChange={(e) => setSenha(e.target.value)} />

                <br /> <br />
                <Link to="/servicos"><Button label="Entrar" /></Link>
            </fieldset>
       

    );
}