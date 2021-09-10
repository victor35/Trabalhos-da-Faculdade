import React, { useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';

export default function Head() {

    const menu = useRef(null);
    let items = [
        { label: 'Cadastrar Servicos', icon: 'pi pi-fw pi-plus' },
        { label: 'Delete', icon: 'pi pi-fw pi-trash' }
    ];

    return (
        <div>
            <div className="header" style={{height:"100px",width:"100%", background:"black", bottom:"10px"}}>
                <h1 style={{color:"white",marginLeft:"45%"}}>Serviços</h1>
            </div>
            <Menu  model={items} popup ref={menu} />
            <Button style={{position:"relative", bottom:"80px", backgroundColor:"black", borderColor:"black"}}    icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)} />
        </div>
    );
}