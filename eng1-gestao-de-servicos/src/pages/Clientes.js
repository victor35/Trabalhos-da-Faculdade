import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Menu } from 'primereact/menu';
import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";

export default function Clientes() {

    const menu = useRef(null);
    let items = [
        { label: 'Servicos', items: [{ label: 'Cadastrar Servicos', icon: 'pi pi-fw pi-plus', url: '/servicos' }, { label: 'Listar Servicos', icon: 'pi pi-fw pi-table', url: '/listarservicos' }] },
        { label: 'Clientes', items: [{ label: 'Cadastrar Clientes', icon: 'pi pi-fw pi-plus', url: '/clientes' }, { label: 'Listar Clientes', icon: 'pi pi-fw pi-table', url: '/listarclientes' }] },
        { label: 'Usuário', items: [{ label: 'Sair',icon: 'pi pi-fw pi-id-card', url: '/' }] }

    ];

    const [date, setDate] = useState('');
    const [date1, setDate1] = useState('');

    return (
        <div>
            {/* header */}
            <div className="header" style={{ height: "100px", width: "100%", background: "black", bottom: "10px" }}>
                <h1 style={{ color: "white", marginLeft: "45%" }}>Clientes</h1>
            </div>
            <Menu model={items} popup ref={menu} />
            <Button style={{ position: "relative", bottom: "80px", backgroundColor: "black", borderColor: "black" }} icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)} />

            {/* content */}
            <fieldset style={{ height: "400px", width: "800px", marginLeft: "30%" }}>
                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col">
                        <label htmlFor="firstname2">Nome</label>
                        <InputText id="firstname2" type="text" />
                    </div>
                    <div className="p-field p-col">
                        <label htmlFor="lastname2">CPF</label>
                        <InputText id="lastname2" type="text" />
                    </div>
                    <div className="p-field p-col">
                        <label htmlFor="lastname2">Email</label>
                        <InputText id="lastname2" type="text" />
                    </div>
                    <div className="p-field p-col">
                        <label htmlFor="lastname2">Data de Nascimento</label>
                        <Calendar value={date} onChange={(e) => setDate(e.value)}></Calendar>
                    </div>
                    <div className="p-field p-col">
                        <label htmlFor="lastname2">Serviços Solicitados</label>
                        <InputText id="lastname2" type="text" />
                    </div>
                    <div className="p-field p-col">
                        <label htmlFor="lastname2">Telefone</label>
                        <InputText id="lastname2" type="text" />
                    </div>
                </div>
            </fieldset>
            <Link to="/listarclientes"> <Button style={{ marginLeft: "45%", marginTop: "15px" }} label="Adicionar" /></Link>
        </div >
    );
}